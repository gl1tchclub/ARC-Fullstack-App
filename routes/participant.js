/**
 * @file Manages routes related to participant operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as participantControls from "../controllers/participants.js"
import * as resources from "../controllers/resources.js"
import { validatePostParticipant } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostParticipant, (req, res) => resources.create(req, res, 'participant'))
router.get("/", (req, res) => resources.getAll(req, res, 'participant'))
router.get("/:id", (req, res) => resources.getID(req, res, 'participant'))
router.put("/:id", validatePostParticipant, (req, res) => resources.update(req, res, 'participant'))
router.delete("/:id", (req, res) => resources.deleteType(req, res, 'participant'))

export default router
