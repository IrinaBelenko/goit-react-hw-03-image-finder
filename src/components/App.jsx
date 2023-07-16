import { getImages } from 'service/image-service';

const getImagesTest = async (query, page) => {
  try {
    const test = await getImages(query, page);
    console.log(test);
  } catch (error) {
    console.log(error);
  }
};

getImagesTest('cat', 1);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
