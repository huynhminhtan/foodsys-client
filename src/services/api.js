export default {
  queryRouteList: '/routes',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  createMenu: 'POST http://localhost:9080/food/category/add',
  createFood: 'POST http://localhost:9080/food/add',

  categoryAndFoods: 'http://localhost:9080/food/category/allwithfoods',

  queryUser: '/user/:id',
  // queryUserList: '/users',
  queryUserList: 'http://localhost:9080/user/all',
  updateUser: 'POST http://localhost:9080/user/add',
  // updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  // removeUser: 'DELETE /user/:id',
  removeUser: 'POST http://localhost:9080/user/delete',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',
  queryOrder: 'http://localhost:9080/order/:id',
  updateOrderStatus: 'Put http://localhost:9080/order/:id',

  queryOrderDetail: 'http://localhost:9080/order/:id/detail',

  queryReservationList: 'http://localhost:9080/reservation/all',
  updateReservationStatus: 'Put http://localhost:9080/reservation/:id',
  updateReservation: 'POST http://localhost:9080/reservation/add',
  removeReservation: 'POST http://localhost:9080/reservation/delete',

  queryOrderList: 'http://localhost:9080/order',

  queryPromotionList: 'http://localhost:9080/promotion/all',
  addPromotion: 'POST http://localhost:9080/promotion/add',
}
