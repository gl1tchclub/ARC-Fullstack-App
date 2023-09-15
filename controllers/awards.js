import { PrismaClient } from "@prisma/client"
import { create, getID, getAll, update, deleteType } from "../controllers/resources.js"
const prisma = new PrismaClient()

export const getAllAwards = (req, res) => { getAll(req, res, 'award', 'owner') }
export const createAwards = (req, res) => { create(req, res, 'award') }
export const getAwardID = (req, res) => { getID(req, res, 'award') }
export const updateAward = (req, res) => { update(req, res, 'award') }
export const deleteAward = (req, res) => { deleteType(req, res, 'award') }