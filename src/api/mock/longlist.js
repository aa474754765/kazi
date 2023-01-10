const Mock = require('mockjs')

const users = Mock.mock({
  'array|500': [
    {
      'name': '@name',
      'sex|1': ['male', 'female'],
      'date': '@date(yyyy-MM-dd)',
      'address': '@email',
      'zip': '@zip'
    }
  ]
}).array

const imgList = Mock.mock({
  'array|100': [/https:\/\/picsum\.photos\/400\/200\?_t=\d{5,8}/
  ]
}).array

module.exports = {
  users,
  imgList
}
