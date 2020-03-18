export const ReservationStatusEnum = {
  INIT: 1,
  CONFIRMED: 2,
  COMPLETED: 3,
  CANCELED: 4,
  1: 'INIT',
  2: 'CONFIRMED',
  3: 'COMPLETED',
  4: 'CANCELED',
}

export const ReservationStatusPersentEnum = {
  INIT: 30,
  CONFIRMED: 90,
  COMPLETED: 100,
  CANCELED: 31,
}

export const increaseReservationStatus = status => {
  const code = ReservationStatusEnum[status]
  if (code < 3) return ReservationStatusEnum[code + 1]
  return status
}

export const getPercentReservationStatus = status => {
  return ReservationStatusPersentEnum[status]
}
