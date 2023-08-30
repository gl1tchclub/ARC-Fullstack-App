/**
 * @file Manages routes related to animal operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal,
} from "../controllers/animal.js";

import { validatePostAnimal } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostAnimal, createAnimal);
router.get('/', getAnimals);
router.get('/:id', getAnimal);
router.put('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);

export default router;