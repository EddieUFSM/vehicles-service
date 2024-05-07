import { Router } from 'express'
import { create, update, find, findOne, remove } from './controller'
import { schema } from './model'
import Vehicle from './model'

const { id } = Vehicle.schema.tree

const router = new Router()

/**
 * @api {post} /vehicles Create a new vehicle
 * @apiName CreateVehicle
 * @apiGroup Vehicle
 *
 * @apiParam {String} placa License plate of the vehicle (required)
 * @apiParam {String} chassi Chassis number of the vehicle (required)
 * @apiParam {Number} renavam Renavam number of the vehicle (required)
 * @apiParam {String} modelo Model of the vehicle (required)
 * @apiParam {String} marca Brand of the vehicle (required)
 * @apiParam {Number} ano Year of the vehicle (required)
 *
 * @apiSuccess {Object} vehicle Created vehicle object
 */
router.post('/', create)


/**
 * @api {get} /vehicles/:id Retrieve a single vehicle
 * @apiName GetVehicle
 * @apiGroup Vehicle
 *
 * @apiParam {String} id Vehicle's unique ID
 *
 * @apiSuccess {Object} vehicle Vehicle details
 */

router.get('/:id', findOne)

/**
 * @api {get} /vehicles Retrieve all vehicles
 * @apiName GetVehicles
 * @apiGroup Vehicle
 *
 * @apiSuccess {Object[]} vehicles List of vehicles
 */
router.get('/', find)


/**
 * @api {patch} /vehicles/:id Update a vehicle
 * @apiName UpdateVehicle
 * @apiGroup Vehicle
 *
 * @apiParam {String} id Vehicle's unique ID
 * @apiParam {String} [placa] License plate of the vehicle
 * @apiParam {String} [chassi] Chassis number of the vehicle
 * @apiParam {Number} [renavam] Renavam number of the vehicle
 * @apiParam {String} [modelo] Model of the vehicle
 * @apiParam {String} [marca] Brand of the vehicle
 * @apiParam {Number} [ano] Year of the vehicle
 *
 * @apiSuccess {Object} vehicle Updated vehicle object
 */
router.patch('/:id', update)

/**
 * @api {delete} /vehicles/:id Delete a vehicle
 * @apiName DeleteVehicle
 * @apiGroup Vehicle
 *
 * @apiParam {String} id Vehicle's unique ID
 *
 * @apiSuccess {String} message Success message
 */
router.delete('/:id', remove)

export default router
export { schema }