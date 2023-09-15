/**
 * @file Manages routes related to colosseum operations
 * @author Elizabeth Minty
 */
import express from "express"

import * as colosseumControls from "../controllers/colosseums.js"

import { validatePostColosseum } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostColosseum, colosseumControls.createColosseums)
router.get("/", colosseumControls.getAllColosseums)
router.get("/:id", colosseumControls.getColosseumID)
router.put("/:id", validatePostColosseum, colosseumControls.updateColosseum)
router.delete("/:id", colosseumControls.deleteColosseum)

export default router
