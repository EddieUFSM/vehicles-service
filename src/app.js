import http from 'http'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'
import config from "./config"

const app = express(config.apiRoot, api)
const server = http.createServer(app)

if (config.mongo.uri) {
  mongoose.connect(mongo.uri)
}
mongoose.Promise = Promise

setImmediate(() => {
    server.listen(config.port, config.ip, () => {
      console.log('Express server listening on http://%s:%d, in %s mode', config.ip, config.port, config.env)
    })
  })
  
  export default app
  