/**
 * @file Manages routes related to team operations
 * @author Elizabeth Minty
 */
import express from 'express'

import {
    create,
    getAll,
    getID,
    update,
    deleteType,
} from '../controllers/operations.js'

import { validatePostTeam } from '../middleware/validation.js'

const router = express.Router()

router.post('/', validatePostTeam, create('team'))
router.get('/', getAll('team'))
router.get('/:id', getID('team'))
router.put('/:id', update('team'))
router.delete('/:id', deleteType('team'))

export default router
