import { PrismaClient } from "@prisma/client"
import { create, getID, getAll, update, deleteType } from "../controllers/resources.js"
const prisma = new PrismaClient()

export const getAllTeams = (req, res) => { getAll(req, res, 'team', 'owner') }
export const createTeams = (req, res) => { create(req, res, 'team') }
export const getTeamID = (req, res) => { getID(req, res, 'team') }
export const updateTeam = (req, res) => { update(req, res, 'team') }
export const deleteTeam = (req, res) => { deleteType(req, res, 'team') }