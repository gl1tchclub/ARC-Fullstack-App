import express from 'express'

import {
    createDepartment,
    getDepartments,
    getDepartment,
    updateDepartment,
    deleteDepartment,
} from '../controllers/department.js'

const router = express.Router()

router.post('/', createDepartment)
router.get('/', getDepartments)
router.get('/:id', getDepartment) //:id = route parameter. Retrieves the id from the request (req) URL. If URL is http://localhost:3000/api/Departments/1, :id will be 1
router.put('/:id', updateDepartment)
router.delete('/:id', deleteDepartment)

export default router