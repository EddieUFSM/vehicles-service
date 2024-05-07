import Vehicle from './model'
import { errorHandler } from '../../services/response'

export const create = ({ body }, res) => 
  Vehicle.create(body)
    .then(vehicle => res.json(vehicle))
    .catch(err => errorHandler(err, res))
    
export const findOne = async ({ params }, res) => 
  Vehicle.findById(params.id)
    .then(vehicle => res.json(vehicle))
    .catch(err => errorHandler(err, res))

export const find = async ({query}, res) => 
  Vehicle.find({}, null, { 
    skip: parseInt(query.offset) || 0,
    limit: parseInt(query.limit) || 10
  })
    .then(vehicle => res.json(vehicle))
    .catch(err => errorHandler(err, res))

export const update = async ({ body, params  }, res) => 
  Vehicle.findOneAndUpdate({ _id: params.id }, body)
    .then(vehicle => res.json(vehicle))
    .catch(err => errorHandler(err, res))

export const remove = async ({ params  }, res) => 
  Vehicle.findOneAndRemove({ _id: params.id})
    .then(vehicle => res.json(vehicle))
    .catch(err => errorHandler(err, res))
