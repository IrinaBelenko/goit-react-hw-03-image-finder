import {
  ImageGalleryItemImage,
  ImageGalleryItemli,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <ImageGalleryItemli>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </ImageGalleryItemli>
  );
};
