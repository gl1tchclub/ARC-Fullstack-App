/**
 * @file Manages routes related to award operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as resources from "../controllers/resources.js"
import { validatePostAward } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostAward, (req, res) => resources.create(req, res, 'award'))
router.get("/", (req, res) => resources.getAll(req, res, 'award'))
router.get("/:id", (req, res) => resources.getID(req, res, 'award'))
router.put("/:id", validatePostAward, (req, res) => resources.update(req, res, 'award'))
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'award'))

export default router
