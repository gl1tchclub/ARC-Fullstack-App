/**
 * @file Manages routes related to award operations
 * @author Elizabeth Minty
 */
import express from 'express'

import {
    create,
    getAll,
    getID,
    update,
    deleteType,
} from '../controllers/resources.js'

import { validatePostAward } from '../middleware/validation.js'

const router = express.Router()

router.post('/', validatePostAward, create('award'))
router.get('/', getAll('award'))
router.get('/:id', getID('award'))
router.put('/:id', update('award'))
router.delete('/:id', deleteType('award'))

export default router
