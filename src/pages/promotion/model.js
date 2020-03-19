import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import api from 'api'
import { pageModel } from 'utils/model'

const {
  queryReservationList,
  updateReservationStatus,
  updateReservation,
  removeReservation,
  queryPromotionList,
  addPromotion,
} = api

export default modelExtend(pageModel, {
  namespace: 'promotion',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/promotion', location.pathname)) {
          const payload = location.query || { page: 1, pageSize: 10 }
          dispatch({
            type: 'query',
            payload,
          })
        }
      })
    },
  },

  effects: {
    *query({ payload = {} }, { call, put }) {
      const data = yield call(queryPromotionList, payload)
      console.log('data: ' + JSON.stringify(data.list))
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.list,
            pagination: {
              current: Number(payload.page) || 1,
              pageSize: Number(payload.pageSize) || 10,
              total: 10,
            },
          },
        })
      }
    },

    *create({ payload }, { select, call, put }) {
      const availableFrom = payload.availableFrom.valueOf()
      const availableTo = payload.availableTo.valueOf()
      const promotionData = { ...payload, availableFrom, availableTo }
      console.log('=addPromotion====')
      console.log(promotionData)

      const data = yield call(addPromotion, promotionData)
      if (data.success) {
        yield put({ type: 'query', payload: {} })
        console.log('addPromotion= ' + JSON.stringify(data))
      } else {
        throw data
      }
    },

    // *create({ payload }, { select, call, put }) {
    //   console.log('=updateReservation====')
    //   const reservationsDate = payload.reservationsDate.valueOf()
    //   const reservationData = { ...payload, reservationsDate }
    //   console.log(reservationData)
    //   const data = yield call(updateReservation, reservationData)
    //   if (data.success) {
    //     console.log('updateReservation= ' + JSON.stringify(data))
    //     yield put({ type: 'query', payload: {} })
    //   } else {
    //     throw data
    //   }
    // },

    // *delete({ payload }, { call, put, select }) {
    //   console.log('removeReservation====')
    //   console.log(payload)
    //   const data = yield call(removeReservation, payload)
    //   if (data.success) {
    //     console.log('removeReservation= ' + JSON.stringify(data))
    //     yield put({ type: 'query', payload: {} })
    //   } else {
    //     throw data
    //   }
    // },
  },

  reducers: {},
})
