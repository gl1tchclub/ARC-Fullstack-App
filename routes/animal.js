/**
 * @file Manages routes related to animal operations
 * @author Elizabeth Minty
 */
import express from 'express'

import { create, getID, update, deleteType } from '../controllers/resources.js'

import { getAnimals } from '../controllers/animals.js'

import { validatePostAnimal } from '../middleware/validation.js'

const router = express.Router()

router.post('/', validatePostAnimal, create('animal'))
router.get('/', getAnimals)
router.get('/:id', getID('animal'))
router.put('/:id', update('animal'))
router.delete('/:id', deleteType('animal'))

export default router
