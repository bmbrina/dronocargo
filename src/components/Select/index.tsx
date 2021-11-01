import React from 'react'

export interface SelectProps {
  hasLabel?: boolean
  labelText?: string
  name: string
  placeholder?: string
  options: string[]
  handleChange: (value: string) => void
}

const Select = ({ name, handleChange, labelText, hasLabel, options, placeholder }: SelectProps) => {
  const onChange = (e: any) => {
    handleChange(e.target.name)
  }
  return (
    <div className="form-group">
      <label className={`form-group__label ${hasLabel ? 'visually-hidden' : ''}`} htmlFor={name}>
        {hasLabel ? name : labelText}
      </label>
      <select className="form-group__select" name={name} id={name} onChange={onChange}>
        {placeholder && <option value="" disabled selected>{placeholder}</option>}
        {options.map((option: string) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.defaultProps = {
  hasLabel: false,
  labelText: ''
};

export default Select
