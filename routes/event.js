import express from 'express';

import {
    createInstitution,
    getInstitutions,
    getInstitution,
    updateInstitution,
    deleteInstitution,
} from "../controllers/institution.js";

import { validatePostInstitution } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostInstitution, createInstitution);
router.get('/', getInstitutions);
router.get('/:id', getInstitution); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/institutions/1, :id will be 1
router.put('/:id', updateInstitution);
router.delete('/:id', deleteInstitution);

export default router;