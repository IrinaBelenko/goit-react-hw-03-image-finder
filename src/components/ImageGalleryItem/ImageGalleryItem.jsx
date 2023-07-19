import {
  ImageGalleryItemImage,
  ImageGalleryItemli,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  showModal,
}) => {
  return (
    <ImageGalleryItemli onClick={() => showModal(largeImageURL)}>
      <ImageGalleryItemImage src={webformatURL} alt={tags} />
    </ImageGalleryItemli>
  );
};
