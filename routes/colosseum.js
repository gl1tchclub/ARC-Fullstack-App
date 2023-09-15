/**
 * @file Manages routes related to colosseum operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostColosseum } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostColosseum, (req, res) => resources.create(req, res, 'colosseum'))
router.get("/", (req, res) => resources.getAll(req, res, 'colosseum'))
router.get("/:id", (req, res) => resources.getID(req, res, 'colosseum'))
router.put("/:id", validatePostColosseum, (req, res) => resources.update(req, res, 'colosseum'))
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'colosseum'))

export default router
