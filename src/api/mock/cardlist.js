const Mock = require('mockjs')

const cardList = Mock.mock({
  'array|86': [
    {
      'item|1': [
        {
          'name': 'CVM',
          'icon': 'computer',
          'status|1': true,
          'desc': '云硬盘为您提供用于CVM的持久性数据块级存储服务。云硬盘中的数据自动地可用区内以多副本冗余。'
        },
        {
          'name': 'SSL证书',
          'icon': 'user',
          'status|1': true,
          'desc': 'SSL证书又叫服务器证书，腾讯云为您提供证书的一站式服务，包括免费、付费证书的申请、管理及部分。'
        },
        {
          'name': 'T-Sec 云防火墙',
          'icon': 'shop',
          'status|1': true,
          'desc': '腾讯安全云防火墙产品，是腾讯云安全团队结合云原生的优势，自主研发的SaaS化防火墙产品。'
        },
        {
          'name': '人脸识别',
          'icon': 'ear',
          'status|1': true,
          'desc': '基于腾讯优图强大的面部分析技术，提供包括人脸检测与分析、五官定位、人脸搜索、人脸比对、人脸。'
        }
      ]
    }
  ]
}).array.map(a => a.item)

module.exports = {
  cardList
}
