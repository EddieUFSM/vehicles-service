import http from 'http'
import mongoose from './services/mongoose/index.js'
import express from './services/express/index.js'
import api from './api/index.js'
import config from "./config.js"

const app = express(config.apiRoot, api)
const server = http.createServer(app)

if (config.mongo.uri) {
  mongoose.connect(config.mongo.uri)
}
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(config.port, config.ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', config.ip, config.port, config.env)
  })
})
  
export default app
  