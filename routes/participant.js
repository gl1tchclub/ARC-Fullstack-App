/**
 * @file Manages routes related to participant operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as participantControls from "../controllers/participants.js"
import { validatePostParticipant } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostParticipant, participantControls.createParticipants)
router.get("/", participantControls.getAllParticipants)
router.get("/:id", participantControls.getParticipantID)
router.put("/:id", validatePostParticipant, participantControls.updateParticipant)
router.delete("/:id", participantControls.deleteParticipant)

export default router
