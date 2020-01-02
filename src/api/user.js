import request from '../utils/request'

export function login(data) {

  return request({
    url: '/api/',
    method: 'post',
    data
  })
}

export function getUserInfo(data) {
  return request({
    url: '/api/',
    method: 'get',
    params: data
  })
}