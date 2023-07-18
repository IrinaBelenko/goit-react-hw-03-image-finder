import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imagesList }) => {
  return (
    <ul class="gallery">
      {imagesList.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
        );
      })}
    </ul>
  );
};
