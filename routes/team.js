/**
 * @file Manages routes related to team operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createTeam,
    getTeams,
    getTeam,
    updateTeam,
    deleteTeam,
} from "../controllers/team.js";

import { validatePostTeam } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostTeam, createTeam);
router.get('/', getTeams);
router.get('/:id', getTeam); 
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);

export default router;