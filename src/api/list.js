import request from '@/utils/request'
const Mock = require('mockjs')

export function getUsers() {
  Mock.mock('/kazi-api/users', 'get', require('./mock/longlist').users)
  return request({
    url: '/kazi-api/users',
    method: 'get'
  })
}

export function getCardList() {
  Mock.mock('/kazi-api/cards', 'get', require('./mock/cardlist').cardList)
  return request({
    url: '/kazi-api/cards',
    method: 'get'
  })
}
