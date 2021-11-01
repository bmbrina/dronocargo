import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import Input from '../../components/Input'
import Loader from '../../components/Loader'
import Select from '../../components/Select'
import { Shipment } from '../../models/Shipment'
import { getShipments } from '../../utils/API/shipments'

const Shipments = () => {
  const history = useHistory()
  const [shipments, setShipments] = useState<Shipment[] | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState('')
  const actions = ['Edit', 'Delete']
  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }
  const newShipment = () => {
    // eslint-disable-next-line no-console
    console.log('show modal')
  }
  const executeAction = (action: string) => {
    // eslint-disable-next-line no-console
    console.log('click on ', action)
  }
  useEffect(() => {
    getShipments().then((response: any) => {
      setShipments(response)
    })
  }, [])

  return (
    <div className="shipments">
      <div className="shipments__container">
        <div className="shipments__header">
          <h1 className="shipments__title">
            Delivery <span>History</span>
          </h1>
          <div className="shipments__actions">
            <Input type="search" name="search" placeholder="Search" value={searchQuery} handleInput={handleSearch} classList="search" />
            <Button title="New delivery" type="primary" handleClick={newShipment} />
          </div>
        </div>
        <div className="shipments__content">
          {!shipments ? (
            <Loader />
          ) : (
            <table className="shipments__table">
              <tbody>
                {shipments.map((shipment: Shipment) => (
                    <tr className="shipments__table-row" key={shipment.id}>
                      <td className="shipments__table-cell shipments__table-cell--bold">
                        <span>Status</span>
                        {shipment.status}
                      </td>
                      <td className="shipments__table-cell">
                        <span>Order ID</span>
                        {shipment.id}
                      </td>
                      <td className="shipments__table-cell">
                        <span>Technician</span>
                        {shipment.technician}
                      </td>
                      <td className="shipments__table-cell">
                        <span>Platform</span>
                        {shipment.platform}
                      </td>
                      <td className="shipments__table-cell">
                        <span>Drone</span>
                        {shipment.drone}
                      </td>
                      <td className="shipments__table-cell">
                        <span>Technical check</span>
                        {shipment.technicalCheck}
                      </td>
                      <td className="shipments__table-cell">
                        <div className="shipments__table-actions">
                          <Button title="Details" handleClick={() => history.push(`/shipment/${shipment.id}`)} type="default" icon={{position: 'right', name: 'window'}} />
                          <Select name="actions" placeholder="Actions" options={actions} handleChange={executeAction} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shipments
