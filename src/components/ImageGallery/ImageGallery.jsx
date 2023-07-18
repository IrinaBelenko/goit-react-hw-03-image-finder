import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.styled';

export const ImageGallery = ({ imagesList }) => {
  return (
    <ImageGalleryUl>
      {imagesList.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        );
      })}
    </ImageGalleryUl>
  );
};
