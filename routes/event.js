/**
 * @file Manages routes related to event operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostEvent } from "../middleware/validation.js"

const router = express.Router()

// POST route for creating a new 'event' resource
router.post("/", validatePostEvent, (req, res) =>
  resources.create(req, res, "event")
)

// GET route for retrieving all 'event' resources
router.get("/", (req, res) => resources.getAll(req, res, "event"))

// GET route for retrieving a specific 'event' resource by ID
router.get("/:id", (req, res) => resources.getID(req, res, "event"))

// PUT route for updating a 'event' resource by ID
router.put("/:id", validatePostEvent, (req, res) =>
  resources.update(req, res, "event")
)

// DELETE route for deleting a 'event' resource by ID
router.delete("/:id", (req, res) => resources.deleteType(req, res, "event"))

export default router
