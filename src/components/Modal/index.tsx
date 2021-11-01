import React, { useEffect } from 'react'
import Button from '../Button'

interface ModalProps {
  title?: string
  subtitle?: string
  children: JSX.Element
  handleClose: () => void
}

const Modal = ({ title, subtitle, children, handleClose }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => { document.body.style.overflow = 'unset' }
  }, [])

  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__close">
          <Button type="ghost" icon={{position: 'left', name: 'close'}} title="" handleClick={handleClose} />
        </div>
        <div className="modal__header">
          <h1 className="modal__title">{title}</h1>
          <p className="modal__subtitle">{subtitle}</p>
        </div>
        <div className="modal__body">
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  title: '',
  subtitle: ''
};

export default Modal

