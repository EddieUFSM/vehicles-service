import Vehicle from './model.js'
import { errorHandler, success, notFound } from '../../services/response/index.js'

export const create = ({ body }, res) => {
  console.log("CREATE")
  return Vehicle.create(body)
    .then(success(res, 201))
    .catch(err => errorHandler(err, res))
}
export const findOne = async ({ params }, res) => 
  Vehicle.findById(params.id)
    .then(notFound(res))
    .then(success(res))
    .catch(err => errorHandler(err, res))

export const find = async ({query}, res) => 
  Vehicle.find({}, null, { 
    skip: parseInt(query.offset) || 0,
    limit: parseInt(query.limit) || 10
  })
    .then(success(res))
    .catch(err => errorHandler(err, res))

export const update = async ({ body, params  }, res) => 
  Vehicle.findOneAndUpdate({ _id: params.id }, body, { new: true })
    .then(notFound(res))
    .then(success(res))
    .catch(err => errorHandler(err, res))

export const remove = async ({ params  }, res) => 
  Vehicle.findOneAndRemove({ _id: params.id})
    .then(notFound(res))
    .then(success(res, 204))
    .catch(err => errorHandler(err, res))
