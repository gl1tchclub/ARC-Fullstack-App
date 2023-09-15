/**
 * @file Manages routes related to event operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostEvent } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostEvent, (req, res) => resources.create(req, res, 'event'))
router.get("/", (req, res) => resources.getAll(req, res, 'event'))
router.get("/:id", (req, res) => resources.getID(req, res, 'event'))
router.put("/:id", validatePostEvent, (req, res) => resources.update(req, res, 'event'))
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'event'))

export default router
