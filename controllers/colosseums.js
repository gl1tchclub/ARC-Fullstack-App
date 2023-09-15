import { PrismaClient } from "@prisma/client"
import { create, getID, getAll, update, deleteType } from "../controllers/resources.js"
const prisma = new PrismaClient()

export const getAllColosseums = (req, res) => { getAll(req, res, 'colosseum', 'owner') }
export const createColosseums = (req, res) => { create(req, res, 'colosseum') }
export const getColosseumID = (req, res) => { getID(req, res, 'colosseum') }
export const updateColosseum = (req, res) => { update(req, res, 'colosseum') }
export const deleteColosseum = (req, res) => { deleteType(req, res, 'colosseum') }
