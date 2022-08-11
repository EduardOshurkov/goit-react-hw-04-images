import { createPortal } from 'react-dom';
import { Component } from 'react'
import { Overlay, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');


export default class Modal extends Component {

    

    componentDidMount() {
        window.addEventListener('keydown', this.hanleKeyDown)
     }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.hanleKeyDown)
    }
 
    hanleKeyDown = event => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };

    hanleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

  render() {
      return createPortal(
          <Overlay onClick={this.hanleBackdropClick}>
              <ModalContent className='center'>{this.props.children}</ModalContent>
              
          </Overlay>, modalRoot
      );
    };
};





