/**
 * @file manages all operations related to the schema
 * @author Elizabeth Minty
 */
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const create = (type) => {
  return async (req, res) => {
    try {
      await prisma[type].create({
        data: { ...req.body },
      })

      const newType = await prisma[type].findMany()

      return res.status(201).json({
        msg: `${type} successfully created`,
        data: newType,
      })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }
}

const getAll = (type) => {
  return async (req, res) => {
    try {
      const types = await prisma[type].findMany()

      if (types.length === 0) {
        return res.status(404).json({ msg: `No ${type} found` })
      }

      return res.json({ data: types })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }
}

const getID = (type) => {
  return async (req, res) => {
    try {
      const typeId = await prisma[type].findUnique({
        where: { id: Number(req.params.id) },
      })

      if (!typeId) {
        res.status(404).json({
          msg: `${type} with ID ${res.params.id} does not exist`,
        })
      }
      return res.json({ data: typeId })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }
}

const update = (type) => {
  return async (req, res) => {
    try {
      let updatedType = await prisma[type].findUnique({
        where: { id: Number(req.params.id) },
      })

      if (!updatedType) {
        return res.status(404).json({
          msg: `No ${type} with the id: ${req.params.id} found`,
        })
      }

      updatedType = await prisma[type].update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      })

      return res.json({
        msg: `${type} with the id: ${req.params.id} successfully updated`,
        data: updatedType,
      })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }
}

const deleteType = (type) => {
  return async (req, res, type) => {
    try {
      const deleteType = await prisma[type].findUnique({
        where: { id: Number(req.params.id) },
      })

      if (!deleteType) {
        return res.status(404).json({
          msg: `No ${type} with the id: ${req.params.id} found`,
        })
      }

      await prisma[type].delete({
        where: { id: Number(req.params.id) },
      })

      return res.json({
        msg: `${type} with the id: ${req.params.id} successfully deleted`,
      })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }
}

export { create, getAll, getID, update, deleteType }
