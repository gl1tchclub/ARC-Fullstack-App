/**
 * @file Manages routes related to colosseum operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    create,
    getID,
    update,
    deleteType,
} from "../controllers/operations.js";

import { getColosseums } from "../controllers/colosseums.js";

import { validatePostColosseum } from "../middleware/validation.js";

const router = express.Router();

router.post('/', validatePostColosseum, create("colosseum"));
router.get('/', getColosseums);
router.get('/:id', getID("colosseum"));
router.put('/:id', update("colosseum"));
router.delete('/:id', deleteType("colosseum"));

export default router;