/**
 * @file 
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
router.get('/:id', getEvent); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Events/1, :id will be 1
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;