import { PrismaClient } from "@prisma/client"
import { create, getID, getAll, update, deleteType } from "../controllers/resources.js"
const prisma = new PrismaClient()

export const getAllEvents = (req, res) => { getAll(req, res, 'event', 'owner') }
export const createEvents = (req, res) => { create(req, res, 'event') }
export const getEventID = (req, res) => { getID(req, res, 'event') }
export const updateEvent = (req, res) => { update(req, res, 'event') }
export const deleteEvent = (req, res) => { deleteType(req, res, 'event') }