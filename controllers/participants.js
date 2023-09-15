import { PrismaClient } from "@prisma/client"
import { create, getID, getAll, update, deleteType } from "../controllers/resources.js"
const prisma = new PrismaClient()


export const getAllParticipants = (req, res) => { getAll(req, res, 'participant') }
export const createParticipants = (req, res) => { create(req, res, 'participant') }
export const getParticipantID = (req, res) => { getID(req, res, 'participant') }
export const updateParticipant = (req, res) => { update(req, res, 'participant') }
export const deleteParticipant = (req, res) => { deleteType(req, res, 'participant') }