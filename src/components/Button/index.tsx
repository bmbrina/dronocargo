import React from 'react'
import Icons from '../../images/icons.svg'

interface Icon {
  position: 'left' | 'right'
  name: string
}

interface ButtonProps {
  title: string
  formHandler?: boolean
  type: string
  icon?: Icon
  handleClick: () => void
}

const Button = ({ title, formHandler, type, icon, handleClick }: ButtonProps) => {
  const iconMarkup = () => (
      <svg viewBox="0 0 20 20" className={`button__icon button__icon--${icon?.position} button__icon--${icon?.name}`}>
        <use xlinkHref={`${Icons}#${icon?.name}`} />
      </svg>
    )

  return (
    <button type={formHandler ? "submit" : "button"} className={`button button--${type} ${icon && 'button--with-icon'}`} onClick={handleClick}>
      {icon && icon.position === 'left' && iconMarkup()}
      {title}
      {icon && icon.position === 'right' && iconMarkup()}
    </button>
  )
}

Button.defaultProps = {
  icon: undefined,
  formHandler: false
};

export default Button

