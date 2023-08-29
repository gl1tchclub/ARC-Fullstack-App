/**
 * @file 
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
router.get('/:id', getAward); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Awards/1, :id will be 1
router.put('/:id', updateAward);
router.delete('/:id', deleteAward);

export default router;