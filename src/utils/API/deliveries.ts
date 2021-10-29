import { mockDeliveries } from "../../data/mockDeliveries"
import { Delivery } from "../../models/Delivery"

const getDeliveries = () => new Promise((resolve, reject) => {
    const deliveries = localStorage.getItem('deliveries')
    resolve(deliveries ? JSON.parse(deliveries) : mockDeliveries)
 })

const saveDelivery = (delivery: Delivery) => new Promise((resolve, reject) => {
    let deliveries: any = localStorage.getItem('deliveries')
    if (deliveries) {
      deliveries = [...JSON.parse(deliveries), delivery]
    } else {
      deliveries = [delivery]
    }
    localStorage.setItem('deliveries', JSON.stringify(deliveries))
    resolve(true)
 })

export { getDeliveries, saveDelivery }
