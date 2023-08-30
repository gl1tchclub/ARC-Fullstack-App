/**
 * @file Manages routes related to ticket operations
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
router.get('/:id', getTicket);
router.put('/:id', updateTicket);
router.delete('/:id', deleteTicket);

export default router;