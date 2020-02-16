export const OrderStatusEnum = {
  INIT: 1,
  ORDERED: 2,
  CONFIRMED: 3,
  DELIVERING: 4,
  COMPLETED: 5,
  CANCELED: 6,
  1: 'INIT',
  2: 'ORDERED',
  3: 'CONFIRMED',
  4: 'DELIVERING',
  5: 'COMPLETED',
  6: 'CANCELED',
}

export const increaseStatus = status => {
  const code = OrderStatusEnum[status]
  if (code < 5) return OrderStatusEnum[code + 1]
  return status
}
