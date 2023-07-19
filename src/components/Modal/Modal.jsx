import { ModalDiv, Overlay } from './Modal.styled';
import { RiCloseCircleFill } from 'react-icons/ri';

export const Modal = ({ largeImageURL, closeModal }) => {
  return (
    <Overlay>
      <ModalDiv>
        <img src={largeImageURL} alt="modal" />
        <RiCloseCircleFill
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'black',
          }}
          color="white"
          size="16px"
          onClick={closeModal}
        />
      </ModalDiv>
    </Overlay>
  );
};
