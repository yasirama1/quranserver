const path = require('path')
module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'u474077381_RZX2I',
    user: process.env.DB_USER || 'u474077381_o1yvH',
    password: process.env.DB_PASS || 'quranazeemi',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'sql328.main-hosting.eu',
      // storage: path.resolve(__dirname, '../../tabtracker.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
