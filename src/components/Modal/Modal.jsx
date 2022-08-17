import { createPortal } from 'react-dom';
import { useEffect } from 'react'
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');


export default function Modal (props) {

    
    useEffect(() => {
        window.addEventListener('keydown', hanleKeyDown);
        return () => window.addEventListener('keydown', hanleKeyDown);
    });
 
    const hanleKeyDown = event => {
        if (event.code === "Escape") {
            props.onClose();
        }
    };

    const hanleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

      return createPortal(
          <Overlay onClick={hanleBackdropClick}>
              <ModalContent className='center'>{props.children}</ModalContent>
              
          </Overlay>, modalRoot
      );
};





