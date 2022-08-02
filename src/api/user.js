import request from '@/utils/request'

export function Verification(clientToken) {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`
  })
}

export function Login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
