/**
 * @file Manages routes related to award operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createAward,
    getAwards,
    getAward,
    updateAward,
    deleteAward,
} from "../controllers/award.js";

import { validatePostAward } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostAward, createAward);
router.get('/', getAwards);
router.get('/:id', getAward); 
router.put('/:id', updateAward);
router.delete('/:id', deleteAward);

export default router;