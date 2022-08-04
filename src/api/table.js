import request from '@/utils/request'

export function getList() {
  return request({
    url: '/task-service/task/search'
  })
}
