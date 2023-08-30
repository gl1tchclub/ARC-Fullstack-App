/**
 * @file Manages routes related to participant operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createParticipant,
    getParticipants,
    getParticipant,
    updateParticipant,
    deleteParticipant,
} from "../controllers/participant.js";

import { validatePostParticipant } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostParticipant, createParticipant);
router.get('/', getParticipants);
router.get('/:id', getParticipant);
router.put('/:id', updateParticipant);
router.delete('/:id', deleteParticipant);

export default router;