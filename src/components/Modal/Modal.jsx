import { ModalDiv, Overlay } from './Modal.styled';
import { RiCloseCircleFill } from 'react-icons/ri';
import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, onOverlay, closeModal }) => {
  return (
    <Overlay onClick={onOverlay}>
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
          size="28px"
          onClick={closeModal}
        />
      </ModalDiv>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string,
  closeModal: PropTypes.func,
};
