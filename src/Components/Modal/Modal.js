import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        modalImage: PropTypes.string,
    };
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        const { modalImage } = this.props;

        return createPortal(
            <div className="Overlay" onClick={this.handleBackdropClick}>
                <div className="Modal">
                    <img src={modalImage} alt="" />
                </div>
            </div>,
            modalRoot,
        )
    }
};

export default Modal;