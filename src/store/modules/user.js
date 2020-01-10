import {
  login,
  getUserInfo
} from '@/api/user'
import {
  getToken,
  setToken
} from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  Login({
    commit
  }, userInfo) {
    const {
      username,
      password
    } = userInfo;

    return new Promise((resolve, reject) => {
      login({
        username: username.trim(),
        password: password
      }).then(response => {
        const {
          data
        } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }, error => {
        reject()
      })
    })
  },
}

export default {
  namespace: true,
  state,
  actions,
  mutations,
}