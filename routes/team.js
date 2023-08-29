/**
 * @file 
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
router.get('/:id', getTeam); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Teams/1, :id will be 1
router.put('/:id', updateTeam);
router.delete('/:id', deleteTeam);

export default router;