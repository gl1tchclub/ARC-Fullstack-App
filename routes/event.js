/**
 * @file Manages routes related to event operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent,
} from "../controllers/event.js";

import { validatePostEvent } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostEvent, createEvent);
router.get('/', getEvents);
router.get('/:id', getEvent); 
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;