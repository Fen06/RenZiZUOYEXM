import request from '@/utils/request'

export function Verification(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`
  })
}

export function Login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'POST',
    data
  })
}
