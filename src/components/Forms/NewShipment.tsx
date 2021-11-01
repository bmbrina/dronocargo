import React, { useState } from 'react'
import { Shipment } from '../../models/Shipment'
import { getDrones, getPlatforms } from '../../utils/API/shipments'
import Button from '../Button'
import Input from '../Input'
import Select from '../Select'

interface NewShipmentProps {
  handleCancel: () => void
  handleSubmit: (shipment: Shipment) => void
}

const newShipment: Shipment = {
  status: 'Ready',
  id: '',
  technician: '',
  platform: '',
  drone: '',
  technicalCheck: 'Passed'
}

const NewShipment = ({ handleCancel, handleSubmit }: NewShipmentProps) => {
  const [form, setFormValue] = useState<Shipment>(newShipment)
  const [showFormError, setFormErrorState] = useState<boolean>(false)
  const handleInput = (name: string, value: string) => {
    setFormValue({ ...form, [name]: value })

    if (showFormError) {
      setFormErrorState(false)
    }
  }
  const validateForm = () => Object.values(form).every(x => x !== '')
  const onSubmit = () => {
    const isFormValid = validateForm()
    if (isFormValid) {
      handleSubmit(form)
    } else {
      setFormErrorState(true)
    }
  }
  const fields = [
    {
      kind: 'input',
      name: 'id',
      type: 'text',
      hasLabel: true,
      labelText: 'Order ID',
      placeholder: 'Order ID',
      required: true
    },
    {
      kind: 'input',
      name: 'technician',
      type: 'search',
      hasLabel: true,
      labelText: 'Technician',
      placeholder: 'Technician name',
      classList: 'search',
      required: true
    },
    {
      kind: 'select',
      name: 'platform',
      hasLabel: true,
      labelText: 'Platform',
      options: getPlatforms(),
      placeholder: 'Select platform'
    },
    {
      kind: 'select',
      name: 'drone',
      hasLabel: true,
      labelText: 'Drone',
      options: getDrones(),
      placeholder: 'Select drone'
    }
  ]

  return (
    <form className="form">
      <div className="form__fields">
        {fields.map((field) => {
          const { kind } = field
          switch (kind) {
            case 'select':
              return (
                <Select
                  name={field.name}
                  hasLabel={field.hasLabel}
                  labelText={field.labelText}
                  options={field.options}
                  handleChange={handleInput}
                  value={form[field.name]}
                  placeholder={field.placeholder}
                  key={field.name}
                />
              )
            case 'input':
              return (
                <Input
                  name={field.name}
                  placeholder={field.placeholder}
                  type={field.type}
                  hasLabel={field.hasLabel}
                  labelText={field.labelText}
                  handleInput={handleInput}
                  key={field.name}
                  value={form[field.name]}
                  classList={field.classList}
                  required={field.required}
                />
              )
            default:
              return null
          }
        })}
      </div>
      {showFormError && <p className="form__error">All fields are required</p>}
      <div className="form__actions">
        <Button handleClick={handleCancel} title="Cancel" type="default" />
        <Button handleClick={onSubmit} title="Create new delivery" type="primary" />
      </div>
    </form>
  )
}

export default NewShipment
