import { mockShipments } from "../../data/mockShipments"
import { Shipment } from "../../models/Shipment"

const getShipments = () => new Promise((resolve, reject) => {
    const shipments = localStorage.getItem('shipments')
    resolve(shipments ? JSON.parse(shipments) : mockShipments)
 })

const saveShipment = (shipment: Shipment) => new Promise((resolve, reject) => {
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
