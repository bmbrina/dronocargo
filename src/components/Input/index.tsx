import React, { useRef } from 'react'

interface InputProps {
  hasLabel?: boolean
  labelText?: string
  type: string
  classList?: string
  name: string
  value?: string
  placeholder: string
  handleInput: (value: string) => void
}

const Input = ({ hasLabel, labelText, classList, type, name, value, placeholder, handleInput }: InputProps) => {
  const $input = useRef<HTMLInputElement>(null)
  const onInput = () => {
    if ($input.current) {
      handleInput($input.current.value)
    }
  }
  return (
    <div className="form-group">
      <label className={`form-group__label ${hasLabel ? 'visually-hidden' : ''}`} htmlFor={name}>
        {hasLabel ? name : labelText}
      </label>
      <input
        className={`form-group__input ${classList}`}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onInput={onInput}
        ref={$input}
      />
    </div>
  )
}

Input.defaultProps = {
  hasLabel: false,
  labelText: '',
  classList: '',
  value: ''
};

export default Input

