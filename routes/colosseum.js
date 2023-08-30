/**
 * @file Manages routes related to colosseum operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createColosseum,
    getColosseums,
    getColosseum,
    updateColosseum,
    deleteColosseum,
} from "../controllers/colosseum.js";

import { validatePostColosseum } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostColosseum, createColosseum);
router.get('/', getColosseums);
router.get('/:id', getColosseum);
router.put('/:id', updateColosseum);
router.delete('/:id', deleteColosseum);

export default router;