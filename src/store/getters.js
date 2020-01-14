const getters = {
  token: state => state.user.token,
  permission_route:state => state.permission.routes
}

export default getters