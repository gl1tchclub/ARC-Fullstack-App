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
router.get('/:id', getCustomer); //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Customers/1, :id will be 1
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;