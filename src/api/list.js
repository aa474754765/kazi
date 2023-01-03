import request from '@/utils/request'
const Mock = require('mockjs')

export function getUsers() {
  return request({
    url: '/kazi-api/users',
    method: 'get'
  })
}

Mock.mock('/kazi-api/users', 'get', require('./mock/longlist').users)
