import React from 'react'

export interface SelectProps {
  hasLabel?: boolean
  labelText?: string
  name: string
  placeholder?: string
  options: any
  value?: string
  handleChange: (name: string, value: string) => void
}

const Select = ({ name, handleChange, labelText, hasLabel, options, placeholder, value }: SelectProps) => {
  const onChange = (e: any) => {
    handleChange(e.target.name, e.target.value)
  }
  return (
    <div className="form-group">
      <label className={`form-group__label ${hasLabel ? '' : 'visually-hidden'}`} htmlFor={name}>
        {hasLabel ? labelText : name}
      </label>
      <select className="form-group__select" value={value} name={name} id={name} onChange={onChange}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
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
  labelText: '',
  value: ''
};

export default Select
