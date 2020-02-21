export default {
  queryRouteList: '/routes',

  queryUserInfo: '/user',
  logoutUser: '/user/logout',
  loginUser: 'POST /user/login',

  queryUser: '/user/:id',
  // queryUserList: '/users',
  queryUserList: 'http://localhost:9080/user/all',
  updateUser: 'Patch /user/:id',
  createUser: 'POST /user',
  removeUser: 'DELETE /user/:id',
  removeUserList: 'POST /users/delete',

  queryPostList: '/posts',

  queryDashboard: '/dashboard',
  queryOrder: 'http://localhost:9080/order/:id',
  updateOrderStatus: 'Put http://localhost:9080/order/:id',

  queryOrderDetail: 'http://localhost:9080/order/:id/detail',

  queryReservationList: 'http://localhost:9080/reservation/all',
  queryOrderList: 'http://localhost:9080/order',
}
