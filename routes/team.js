/**
 * @file Manages routes related to team operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostTeam } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostTeam, (req, res) => resources.create(req, res, 'team'))
router.get("/", (req, res) => resources.getAll(req, res, 'team'))
router.get("/:id", (req, res) => resources.getID(req, res, 'team'))
router.put("/:id", validatePostTeam, (req, res) => resources.update(req, res, 'team'))
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'team'))

export default router
