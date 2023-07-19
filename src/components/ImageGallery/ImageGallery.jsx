import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.styled';

export const ImageGallery = ({ imagesList, showModal }) => {
  return (
    <ImageGalleryUl>
      {imagesList.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            showModal={showModal}
          />
        );
      })}
    </ImageGalleryUl>
  );
};
