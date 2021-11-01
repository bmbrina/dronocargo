import React from 'react'
import { useParams } from 'react-router-dom'

const ShipmentDetails = () => {
  const { id } = useParams<{id: string}>();

  return (
    <div className="shipment-details">
      <div className="shipment-details__container">
        <h1 className="shipment-details__title">{id}</h1>
      </div>
    </div>
  )
}

export default ShipmentDetails

