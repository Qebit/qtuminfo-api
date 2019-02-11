const path = require('path')

exports.keys = 'qtuminfo-api-mainnet'

exports.security = {
  csrf: {enable: false}
}

exports.middleware = ['transaction']

exports.sequelize = {
  Sequelize: require('sequelize'),
  dialect: 'mysql',
  database: 'qtum_mainnet',
  host: 'localhost',
  port: 3306,
  username: 'qtum',
  password: ''
}

exports.qtum = {
  chain: 'mainnet'
}

exports.qtuminfo = {
  path: path.resolve('..', 'qtuminfo'),
  port: 3001,
  rpc: {
    protocol: 'http',
    host: 'localhost',
    port: 3889,
    user: 'user',
    password: 'password'
  }
}
