export interface Shipment {
  status: ShipmentStatus
  id: string
  technician: string
  platform: string
  drone: string
  technicalCheck: TechnicalCheckStatus
}

export type ShipmentStatus =
  | 'Ready'
  | 'Pending'

export type TechnicalCheckStatus =
| 'Passed'
