/**
 * @file Manages routes related to animal operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostAnimal } from "../middleware/validation.js"

const router = express.Router()

// Define API routes for managing 'animal' resources
// POST route for creating a new 'animal' resource
router.post("/", validatePostAnimal, (req, res) => resources.create(req, res, 'animal'))

// GET route for retrieving all 'animal' resources
router.get("/", (req, res) => resources.getAll(req, res, 'animal'))

// GET route for retrieving a specific 'animal' resource by ID
router.get("/:id", (req, res) => resources.getID(req, res, 'animal'))

// PUT route for updating a 'animal' resource by ID
router.put("/:id", validatePostAnimal, (req, res) => resources.update(req, res, 'animal'))

// DELETE route for deleting a 'animal' resource by ID
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'animal'))

export default router
