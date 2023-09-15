/**
 * @file Manages routes related to award operations
 * @author Elizabeth Minty
 */
import express from "express"

import * as awardControls from "../controllers/awards.js"

import { validatePostAward } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostAward, awardControls.createAwards)
router.get("/", awardControls.getAllAwards)
router.get("/:id", awardControls.getAwardID)
router.put("/:id", validatePostAward, awardControls.updateAward)
router.delete("/:id", awardControls.deleteAward)

export default router
