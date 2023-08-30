/**
 * @file Manages routes related to customer operations
 * @author Elizabeth Minty
 */
import express from 'express';

import {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer,
} from "../controllers/customer.js";

import { validatePostCustomer } from "../middleware/validation.js";

const router = express.Router();

router.post("/", validatePostCustomer, createCustomer);
router.get('/', getCustomers);
router.get('/:id', getCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;