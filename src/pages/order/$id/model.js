import { pathMatchRegexp } from 'utils'
import api from 'api'

const { queryOrder, queryOrderDetail } = api

export default {
  namespace: 'orderDetail',

  state: {
    pageId: 0,
    order: {},
    detail: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        const match = pathMatchRegexp('/order/:id', pathname)
        if (match) {
          dispatch({
            type: 'queryPageId',
            payload: { id: match[1] },
          })
        }
      })
    },
  },

  effects: {
    *queryPageId({ payload }, { call, put }) {
      yield put({
        type: 'queryPageIdSuccess',
        payload: {
          pageId: payload.id,
        },
      })
    },

    *queryOrder({ payload }, { call, put }) {
      const data = yield call(queryOrder, payload)
      console.log('queryOrder======= ' + JSON.stringify(data))
      if (data) {
        yield put({
          type: 'queryPageIdSuccess',
          payload: {
            order: data,
          },
        })
      }
    },

    *queryOrderDetail({ payload }, { call, put }) {
      const data = yield call(queryOrderDetail, payload)
      console.log('queryOrderDetail======= ' + JSON.stringify(data.list))
      if (data) {
        yield put({
          type: 'queryPageIdSuccess',
          payload: {
            detail: data.list,
          },
        })
      }
    },
  },

  reducers: {
    queryPageIdSuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
