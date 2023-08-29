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
router.get('/:id', getAnimal); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Animals/1, :id will be 1
router.put('/:id', updateAnimal);
router.delete('/:id', deleteAnimal);

export default router;