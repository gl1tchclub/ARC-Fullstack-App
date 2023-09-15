/**
 * @file Manages routes related to team operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostTeam } from "../middleware/validation.js"

const router = express.Router()

// Define API routes for managing 'team' resources
// POST route for creating a new 'team' resource
router.post("/", validatePostTeam, (req, res) => resources.create(req, res, 'team'))

// GET route for retrieving all 'team' resources
router.get("/", (req, res) => resources.getAll(req, res, 'team'))

// GET route for retrieving a specific 'team' resource by ID
router.get("/:id", (req, res) => resources.getID(req, res, 'team'))

// PUT route for updating a 'team' resource by ID
router.put("/:id", validatePostTeam, (req, res) => resources.update(req, res, 'team'))

// DELETE route for deleting a 'team' resource by ID
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'team'))

export default router
