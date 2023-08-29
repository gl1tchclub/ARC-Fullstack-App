/**
 * @file 
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
router.get('/:id', getColosseum); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Colosseums/1, :id will be 1
router.put('/:id', updateColosseum);
router.delete('/:id', deleteColosseum);

export default router;