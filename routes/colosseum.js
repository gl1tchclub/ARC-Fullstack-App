/**
 * @file Manages routes related to colosseum operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostColosseum } from "../middleware/validation.js"

const router = express.Router()

// POST route for creating a new 'colosseum' resource
router.post("/", validatePostColosseum, (req, res) =>
  resources.create(req, res, "colosseum")
)

// GET route for retrieving all 'colosseum' resources
router.get("/", (req, res) => resources.getAll(req, res, "colosseum"))

// GET route for retrieving a specific 'colosseum' resource by ID
router.get("/:id", (req, res) => resources.getID(req, res, "colosseum"))

// PUT route for updating a 'colosseum' resource by ID
router.put("/:id", validatePostColosseum, (req, res) =>
  resources.update(req, res, "colosseum")
)

// DELETE route for deleting a 'colosseum' resource by ID
router.delete("/:id", (req, res) => resources.deleteType(req, res, "colosseum"))

export default router
