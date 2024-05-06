import { Router } from 'express'
import { create, update, find, findOne, remove } from './controller'
import { schema } from './model'
import Vehicle from './model'

const { id } = Vehicle.schema.tree

const router = new Router()

router.post('/', create)

router.get('/:id', findOne)

router.get('/', find)

router.patch('/:id', update)

router.delete('/:id', remove)

export default router
export { schema }