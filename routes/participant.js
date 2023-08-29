/**
 * @file 
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
router.get('/:id', getParticipant); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Participants/1, :id will be 1
router.put('/:id', updateParticipant);
router.delete('/:id', deleteParticipant);

export default router;