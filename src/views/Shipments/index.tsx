import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../components/Button'
import NewShipment from '../../components/Forms/NewShipment'
import Input from '../../components/Input'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import Select from '../../components/Select'
import { Shipment } from '../../models/Shipment'
import { getShipments, saveShipment } from '../../utils/API/shipments'

const modal = {
  title: 'New delivery',
  subtitle:
    'Please select the order ID and a technician to deploy the cargo. All elements are mandatory.'
}

const Shipments = () => {
  const history = useHistory()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [shipments, setShipments] = useState<Shipment[] | []>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [showModal, setModalState] = useState<boolean>(false)
  const actions = ['Edit', 'Delete']
  const handleSearch = (name: string, value: string) => {
    setSearchQuery(value)
  }
  const executeAction = (action: string) => {
    // eslint-disable-next-line no-console
    console.log('click on ', action)
  }
  const createNewShipment = (shipment: Shipment) => {
    saveShipment(shipment, shipments).then(() => {
      setShipments([shipment, ...shipments])
      setModalState(!showModal)
    })
  }
  useEffect(() => {
    getShipments().then((response: any) => {
      setLoading(!isLoading)
      setShipments(response)
    })
  }, [])

  return (
    <>
      <div className="shipments">
        <div className="shipments__container">
          <div className="shipments__header">
            <h1 className="shipments__title">
              Delivery <span>History</span>
            </h1>
            <div className="shipments__actions">
              <Input
                type="search"
                name="search"
                placeholder="Search"
                value={searchQuery}
                handleInput={handleSearch}
                classList="search"
              />
              <Button
                title="New delivery"
                type="primary"
                handleClick={() => setModalState(!showModal)}
              />
            </div>
          </div>
          <div className={`shipments__content ${isLoading && 'shipments__content--center'}`}>
            {isLoading ? (
              <Loader />
            ) : (
              <table className="shipments__table">
                <tbody>
                  {shipments.length > 0 ? (
                    shipments.map((shipment: Shipment) => (
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
                            <Button
                              title="Details"
                              handleClick={() => history.push(`/shipment/${shipment.id}`)}
                              type="default"
                              icon={{ position: 'right', name: 'window' }}
                            />
                            <Select
                              name="actions"
                              placeholder="Actions"
                              options={actions}
                              handleChange={executeAction}
                            />
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="shipments__table-cell empty-shipments">No shipments available</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal {...modal} handleClose={() => setModalState(!showModal)}>
          <NewShipment
            handleCancel={() => setModalState(!showModal)}
            handleSubmit={createNewShipment}
          />
        </Modal>
      )}
    </>
  )
}

export default Shipments
