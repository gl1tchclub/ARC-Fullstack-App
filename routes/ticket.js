/**
 * @file importing the functions to the route page
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket,
} from "../controllers/ticket.js";

import { validatePostTicket } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostTicket, createTicket);
router.get('/', getTickets);
router.get('/:id', getTicket); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Tickets/1, :id will be 1
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;