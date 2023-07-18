import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from 'service/image-service';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    imagesList: [],
    isLoading: false,
    error: null,
    isEmpty: false,
    isVisibleBtn: false,
  };

  componentDidMount() {
    //this.getImagesByQuery('cat', 40);
    //console.log(this.state.imagesList);
  }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImagesByQuery(query, page);
    }
  }

  getImagesByQuery = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const { totalHits, hits } = await getImages(query, page);
      //console.log(hits);
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
        return;
      }
      this.setState(prevState => ({
        imagesList: [...prevState.imagesList, ...hits],
        isVisibleBtn: page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => this.setState({ isLoading: false }), 1000);
    }
  };

  onSubmit = query => {
    // обнуление параметров
    this.setState({
      query,
      page: 1,
      imagesList: [],
      isLoading: false,
      error: null,
      isEmpty: false,
      isVisibleBtn: false,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit}></Searchbar>
        <ImageGallery imagesList={this.state.imagesList} />
      </>
    );
  }
}
