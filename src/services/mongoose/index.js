import Promise from 'bluebird'
import mongoose from 'mongoose'
import config from '../../config.js'

Object.keys(config.mongo.options || { }).forEach((key) => {
  mongoose.set(key, config.mongo.options[key])
})

mongoose.Promise = Promise
/* istanbul ignore next */
mongoose.Types.ObjectId.prototype.view = function () {
  return { id: this.toString() }
}

/* istanbul ignore next */
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
})

export default mongoose
