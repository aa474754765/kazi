const Mock = require('mockjs')

const users = Mock.mock({
  'array|500': [
    {
      'name': '@cname',
      'sex|1': ['男', '女'],
      'date': '@date(yyyy-MM-dd)',
      'address': '@county(true)',
      'zip': '@zip'
    }
  ]
}).array

module.exports = {
  users
}
