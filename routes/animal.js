/**
 * @file Manages routes related to animal operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostAnimal } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostAnimal, (req, res) => resources.create(req, res, 'animal'))
router.get("/", (req, res) => resources.getAll(req, res, 'animal'))
router.get("/:id", (req, res) => resources.getID(req, res, 'animal'))
router.put("/:id", validatePostAnimal, (req, res) => resources.update(req, res, 'animal'))
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'animal'))

export default router
