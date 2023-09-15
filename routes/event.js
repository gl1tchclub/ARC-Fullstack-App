/**
 * @file Manages routes related to event operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as eventControls from "../controllers/events.js"
import { validatePostEvent } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostEvent, eventControls.createEvents)
router.get("/", eventControls.getAllEvents)
router.get("/:id", eventControls.getEventID)
router.put("/:id", validatePostEvent, eventControls.updateEvent)
router.delete("/:id", eventControls.deleteEvent)

export default router
