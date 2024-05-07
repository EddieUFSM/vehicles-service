import express from 'express'
import cors from 'cors'
import compression from 'compression'
import bodyParser from 'body-parser'
import config from '../../config.js'

export default (apiRoot, routes) => {
  const app = express()

  /* istanbul ignore next */
  if (config.env === 'production' || config.env === 'development') {
    app.use(cors())
    app.use(compression())
  }

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(apiRoot, routes)

  return app
}
