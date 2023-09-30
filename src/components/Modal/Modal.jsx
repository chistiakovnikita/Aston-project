import React from 'react'
import './modal.scss'

const Modal = ({ setActive, children }) => {
    return (
        <div onClick={() => setActive(false)} className="modal">
            <div
                onClick={(evt) => evt.stopPropagation()}
                className="modal__content"
            >
                {children}
            </div>
        </div>
    )
}

export default Modal
