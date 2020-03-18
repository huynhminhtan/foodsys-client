import modelExtend from 'dva-model-extend'
import { pathMatchRegexp } from 'utils'
import api from 'api'
import { pageModel } from 'utils/model'

const {
  queryUserList,
  createUser,
  removeUser,
  updateUser,
  removeUserList,
  categoryAndFoods,
  createMenu,
  createFood,
} = api

export default modelExtend(pageModel, {
  namespace: 'menu',

  state: {
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    selectedRowKeys: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if (pathMatchRegexp('/menu', location.pathname)) {
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
      const data = yield call(categoryAndFoods, payload)
      // console.log("data=====");
      // console.log(data);
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

    // *delete({ payload }, { call, put, select }) {
    //   console.log("==========payload");
    //   console.log(payload);
    //   const data = yield call(removeUser, {messengerId: payload})
    //   const { selectedRowKeys } = yield select(_ => _.user)
    //   if (data.success) {
    //     yield put({
    //       type: 'updateState',
    //       payload: {
    //         selectedRowKeys: selectedRowKeys.filter(_ => _ !== payload),
    //       },
    //     })
    //   } else {
    //     throw data
    //   }
    // },
    //
    // *multiDelete({ payload }, { call, put }) {
    //   const data = yield call(removeUserList, payload)
    //   if (data.success) {
    //     yield put({ type: 'updateState', payload: { selectedRowKeys: [] } })
    //   } else {
    //     throw data
    //   }
    // },
    //
    *create({ payload }, { call, put }) {
      const data = yield call(createMenu, payload)
      console.log('=============create')
      console.log(data)

      if (data.success) {
        yield put({ type: 'hideModal' })
      } else {
        throw data
      }
    },

    *createFood({ payload }, { call, put }) {
      console.log('=============create Food')
      console.log(payload)
      const data = yield call(createFood, payload)
      console.log('=============create food response')
      console.log(data)

      if (data.success) {
        yield put({ type: 'hideFoodModal' })
      } else {
        throw data
      }
    },
    //
    // *update({ payload }, { select, call, put }) {
    //   console.log("=ssddd======11=");
    //   const id = yield select(({ user }) => user.currentItem.id)
    //   console.log("=ssddd=======");
    //   console.log(id);
    //   console.log(payload);
    //   const newUser = { ...payload, id }
    //   const data = yield call(updateUser, newUser)
    //   if (data.success) {
    //     yield put({ type: 'hideModal' })
    //   } else {
    //     throw data
    //   }
    // },
  },

  reducers: {
    showModal(state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    showFoodModal(state, { payload }) {
      return { ...state, ...payload, foodModalVisible: true }
    },

    hideModal(state) {
      return { ...state, modalVisible: false }
    },

    hideFoodModal(state) {
      return { ...state, foodModalVisible: false }
    },
  },
})