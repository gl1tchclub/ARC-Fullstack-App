/**
 * @file Manages routes related to participant operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostParticipant } from "../middleware/validation.js"

const router = express.Router()


// POST route for creating a new 'participant' resource
router.post("/", validatePostParticipant, (req, res) =>
  resources.create(req, res, "participant")
)

// GET route for retrieving all 'participant' resources
router.get("/", (req, res) => resources.getAll(req, res, "participant"))

// GET route for retrieving a specific 'participant' resource by ID
router.get("/:id", (req, res) => resources.getID(req, res, "participant"))

// PUT route for updating a 'participant' resource by ID
router.put("/:id", validatePostParticipant, (req, res) =>
  resources.update(req, res, "participant")
)

// DELETE route for deleting a 'participant' resource by ID
router.delete("/:id", (req, res) => resources.deleteType(req, res, "participant"))

export default router
