import { mockShipments } from '../../data/mockShipments'
import { Shipment } from '../../models/Shipment'

const getShipments = () => new Promise((resolve) => {
    const storedShipments = localStorage.getItem('shipments')
    const shipments: Shipment[] = storedShipments ? JSON.parse(storedShipments) : mockShipments
    resolve(shipments)
 })

const saveShipment = (shipment: Shipment) => new Promise((resolve) => {
    let shipments: any = localStorage.getItem('shipments')
    if (shipments) {
      shipments = [...JSON.parse(shipments), shipment]
    } else {
      shipments = [shipment]
    }
    localStorage.setItem('shipments', JSON.stringify(shipments))
    resolve(true)
 })

export { getShipments, saveShipment }
