import { mockShipments } from '../../data/mockShipments'
import { Shipment } from '../../models/Shipment'

const getShipments = () =>
  new Promise((resolve) => {
    const storedShipments = localStorage.getItem('shipments')
    const shipments: Shipment[] = storedShipments ? JSON.parse(storedShipments) : mockShipments
    resolve(shipments)
  })

const saveShipment = (shipment: Shipment, shipments: Shipment[]) =>
  new Promise((resolve) => {
    localStorage.setItem('shipments', JSON.stringify([shipment, ...shipments]))
    resolve(true)
  })

const getPlatforms = () => ['Alpha', 'Beta', 'Gamma']

const getTechnicians = () => ['Ben Santana', 'Juan Reynosa', 'Shan Smith', 'Gerardo Torres', 'Leonardo Flores', 'Miguel Obregón', 'Mariano Arribas', 'Jessica Salinas', 'Ernesto Garcia', 'Pedro Suarez']

const getDrones = () => ['DJI-004Q']

export { getShipments, saveShipment, getPlatforms, getTechnicians, getDrones }
