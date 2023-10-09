/**
 * @file Manages routes related to award operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostAward } from "../middleware/validation.js"

const router = express.Router()

// POST route for creating a new 'award' resource
router.post("/", validatePostAward, (req, res) =>
  resources.create(req, res, "award")
)

// GET route for retrieving all 'award' resources
router.get("/", (req, res) => resources.getAll(req, res, "award"))

// GET route for retrieving a specific 'award' resource by ID
router.get("/:id", (req, res) => resources.getID(req, res, "award"))

// PUT route for updating a 'award' resource by ID
router.put("/:id", validatePostAward, (req, res) =>
  resources.update(req, res, "award")
)

// DELETE route for deleting a 'award' resource by ID
router.delete("/:id", (req, res) => resources.deleteType(req, res, "award"))

export default router
