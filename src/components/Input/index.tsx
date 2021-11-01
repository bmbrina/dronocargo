import React, { useRef } from 'react'

interface InputProps {
  hasLabel?: boolean
  labelText?: string
  type: any
  classList?: string
  name: string
  value?: string
  placeholder: any
  required?: boolean
  handleInput: (name: string, value: string) => void
}

const Input = ({ hasLabel, labelText, classList, type, name, value, placeholder, handleInput, required }: InputProps) => {
  const $input = useRef<HTMLInputElement>(null)
  const onInput = () => {
    if ($input.current) {
      handleInput(name, $input.current.value)
    }
  }
  return (
    <div className="form-group">
      <label className={`form-group__label ${hasLabel ? '' : 'visually-hidden'}`} htmlFor={name}>
        {hasLabel ? labelText : name}
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
        required={required}
      />
    </div>
  )
}

Input.defaultProps = {
  hasLabel: false,
  labelText: '',
  classList: '',
  value: '',
  required: false
};

export default Input

