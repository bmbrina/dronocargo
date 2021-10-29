export interface Delivery {
  status: DeliveryStatus
  orderId: string
  technician: string
  platform: string
  drone: string
  technicalCheck: TechnicalCheckStatus
}

export type DeliveryStatus =
  | 'Ready'
  | 'Pending'

export type TechnicalCheckStatus =
| 'Passed'
