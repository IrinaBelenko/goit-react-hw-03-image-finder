export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li class="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};
