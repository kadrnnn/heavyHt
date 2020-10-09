import service from '../utils/request'

export function login(data) {
  return service({
    url: '/kadrn' + '/success',
    method: 'post',
    data: data
  })
}

export function signin(data) {
  return service({
    url: '/kadrn' + '/setup',
    method: 'post',
    data: data
  })
}

export function treenode() {
  return service({
    url: '/kadrn' + '/address/treenode',
    method: 'post'
  })
}

export function userinfo(data) {
  return service({
    url: '/kadrn' + '/userinfo',
    method: 'post',
    data: data
  })
}
