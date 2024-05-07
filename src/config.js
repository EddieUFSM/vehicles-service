import path from 'path'

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv-safe')
  dotenv.config({
    path: path.join(__dirname, '../.env'),
    example: path.join(__dirname, '../.env.example')
  })
}

export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  ip: process.env.IP || '0.0.0.0',
  apiRoot: process.env.API_ROOT || '',
  mongo: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/vehicles',
    options: {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    }
  }
}