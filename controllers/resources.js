/**
 * @file manages all operations related to the schema
 * @author Elizabeth Minty
 */
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

//Create objects of any given type (parameter)
const create = (type) => {
  return async (req, res) => {
    try {
      //Attempt to create a new object of given type with the data provided in the req body.
      await prisma[type].create({
        data: { ...req.body },
      })

      //Retrieve all objects of the given type from the database after creation.
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

//Get All objects that match any given filters, sorted according to the user
const getAll = async (req, res, type, include) => {
    try {
      
      const page = parseInt(req.query.page) || 1
      const pageSize = parseInt(req.query.pageSize) || 25

      //Retrieve data from the specified type using Prisma.
      const typeModel = await prisma[type].findMany()

      //Check if the given model exists; if not, return a 404 error.
      if (!typeModel) {
        return res.status(404).json({ msg: `Endpoint for ${typeModel} does not exist`})
      }
      
      //Extract query parameters like filters
      const filters = req.query.filters ? JSON.parse(req.query.filters) : {}

      //Define sorting parameters and a query object.
      const sortBy = req.query.sortBy || "name"
      const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc"

      //If filters exist, parse and apply them to the 'match' object.
      // if (filters) {
      //   const filterType = JSON.parse(filters)

      //   for (const key in filterType) {
      //     if (filterType.hasOwnProperty(key)) {
      //       match[key] = filterType[key]
      //     }
      //   }
      // }

      const query = {
        where: filters,
        orderBy: {
          [sortBy]: sortOrder,
        }, 
        include: include,
        skip: pageSize * (page - 1),
        take: pageSize,
      }

      //Retrieve objects from the typeModel based on the query.
      const objects = await typeModel.findMany(query)

      //If no objects are found, return a 404 error.
      if (typeModel.length === 0) {
        return res.status(404).json({ msg: `No ${type} found` })
      }

      //Return a JSON response containing the retrieved data.
      return res.json({ data: objects })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }

//Function getID that takes type (representing a model)
const getID = (type) => {
  return async (req, res) => {
    try {
      //Attempt to find a unique object of the given type based on the ID
      const typeId = await prisma[type].findUnique({
        where: { id: Number(req.params.id) },
      })

      //Check if the object with the specified ID exists; if not, return a 404 error.
      if (!typeId) {
        res.status(404).json({
          msg: `${type} with ID ${res.params.id} does not exist`,
        })
      }

      //Return a JSON response containing the retrieved data
      return res.json({ data: typeId })
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      })
    }
  }
}

//Function update takes a given type and updates the object of that type by its ID
const update = (type) => {
  //Return an asynchronous request handler function.
  return async (req, res) => {
    try {
      //Attempt to find the object of the given type based on the ID from the request.
      let updatedType = await prisma[type].findUnique({
        where: { id: Number(req.params.id) },
      })

      //Check if the object with the specified ID exists; if not, return a 404 error.
      if (!updatedType) {
        return res.status(404).json({
          msg: `No ${type} with the id: ${req.params.id} found`,
        })
      }
      
      //Update the object with the new data from the request body
      updatedType = await prisma[type].update({
        where: { id: Number(req.params.id) },
        data: { ...req.body },
      })

      //Return a JSON res displaying a success message along with the updated data.
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

//Function deleteType takes a given type and deletes the object of that type by its ID
const deleteType = (type) => {
  //Return an async request handler function.
  return async (req, res) => {
    try {
      //Attempt to find the object of the given type based on the ID.
      const deleteType = await prisma[type].findUnique({
        where: { id: Number(req.params.id) },
      })

      //Check if the object with the specified ID exists; if not, return a 404 error.
      if (!deleteType) {
        return res.status(404).json({
          msg: `No ${type} with the id: ${req.params.id} found`,
        })
      }

      //Delete the object from the database based on its ID.
      await prisma[type].delete({
        where: { id: Number(req.params.id) },
      })

      // Return a JSON response indicating the successful deletion.
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
