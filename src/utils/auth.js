import Cookies from 'js-cookies'

export function setCookies(token) {
  return Cookies.set(TokenKey, token)
}

export function getCookies() {
  return Cookies.get(TokenKey)
}

export function removeCookies() {
  return Cookies.remove(TokenKey)
}