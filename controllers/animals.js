import { PrismaClient } from "@prisma/client"
import { create, getID, getAll, update, deleteType } from "../controllers/resources.js"
const prisma = new PrismaClient()


export const getAllAnimals = (req, res) => { getAll(req, res, 'animal', 'owner') }
export const createAnimals = (req, res) => { create(req, res, 'animal') }
export const getAnimalID = (req, res) => { getID(req, res, 'animal') }
export const updateAnimal = (req, res) => { update(req, res, 'animal') }
export const deleteAnimal = (req, res) => { deleteType(req, res, 'animal') }