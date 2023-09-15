/**
 * @file Manages routes related to animal operations
 * @author Elizabeth Minty
 */
import express from "express"

// import { create, getID, update, deleteType } from "../controllers/resources.js"

import * as animalControls from "../controllers/animals.js"

import { validatePostAnimal } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostAnimal, animalControls.createAnimals)
router.get("/", animalControls.getAllAnimals)
router.get("/:id", animalControls.getAnimalID)
router.put("/:id", validatePostAnimal, animalControls.updateAnimal)
router.delete("/:id", animalControls.deleteAnimal)

export default router
