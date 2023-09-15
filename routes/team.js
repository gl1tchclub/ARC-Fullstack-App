/**
 * @file Manages routes related to team operations
 * @author Elizabeth Minty
 */
import express from "express"
import * as teamControls from "../controllers/teams.js"
import { validatePostTeam } from "../middleware/validation.js"

const router = express.Router()

router.post("/", validatePostTeam, teamControls.createTeams)
router.get("/", teamControls.getAllTeams)
router.get("/:id", teamControls.getTeamID)
router.put("/:id", validatePostTeam, teamControls.updateTeam)
router.delete("/:id", teamControls.deleteTeam)

export default router
