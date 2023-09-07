/**
 * @file Manages routes related to participant operations
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

import { validatePostParticipant } from '../middleware/validation.js'

const router = express.Router()

router.post('/', validatePostParticipant, create('participant'))
router.get('/', getAll('participant'))
router.get('/:id', getID('participant'))
router.put('/:id', update('participant'))
router.delete('/:id', deleteType('participant'))

export default router
