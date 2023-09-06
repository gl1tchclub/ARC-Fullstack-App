/**
 * @file Manages routes related to animal operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    create,
    getAll,
    getID,
    update,
    deleteType,
} from "../controllers/operations.js";

import { validatePostAnimal } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostAnimal, create("animal"));
router.get('/', getAll("animal"));
router.get('/:id', getID("animal"));
router.put('/:id', update("animal"));
router.delete('/:id', deleteType("animal"));

export default router;