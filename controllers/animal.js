// /**
//  * @file manages all operations related to animals
//  * @author Elizabeth Minty
//  */

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// /**
//  * @description Creates a new animal.
//  * @name createAnimal
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {Promise<void>} A promise that resolves when the animal is successfully created.
//  * @throws {Error} If an error occurs while creating the animal.
//  */
// const 
  
//   /**
//  * @description Retrieves a list of all animals.
//  * @name getAnimals
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {Promise<void>} A promise that resolves when the list of animals is retrieved and sent in the response.
//  * @throws {Error} If an error occurs while retrieving the list of animals.
//  */
//   const getAnimals = async (req, res) => {
//     try {
//       const animals = await prisma.animal.findMany();
  
//       if (animals.length === 0) {
//         return res.status(404).json({ msg: "No animals found" });
//       }
  
//       return res.json({ data: animals });
//     } catch (err) {
//       return res.status(500).json({
//         msg: err.message,
//       });
//     }
//   };
  
// /**
//  * @description Retrieves a specific animal by its ID.
//  * @name getAnimal
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {Promise<void>} A promise that resolves when the requested animal is retrieved and sent in the response.
//  * @throws {Error} If an error occurs while retrieving the animal or if it does not exist.
//  */
//   const getAnimal = async (req, res) => {
//     try {
//         const animal = await prisma.animal.findUnique( {
//             where: { id: Number(req.params.id) },
//         })

//         if (!animal) {
//             res.status(404).json({ msg: `Animal with ID ${res.params.id} does not exist`})
//         }
//     } catch (err) {
//         return res.status(500).json({
//           msg: err.message,
//         });
//     }
//   }


// /**
//  * @description Updates a specific animal by its ID.
//  * @name updateAnimal
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {Promise<void>} A promise that resolves when the animal is updated successfully.
//  * @throws {Error} If an error occurs while updating the animal or if it does not exist.
//  */
//   const updateAnimal = async (req, res) => {
//     try {
//         let animal = await prisma.animal.findUnique({
//             where: { id: Number(req.params.id) },
//         })

//         if (!animal) {
//             return res
//                 .status(404)
//                 .json({
//                     msg: `No animal with the id: ${req.params.id} found`,
//                 })
//         }

//         animal = await prisma.animal.update({
//             where: { id: Number(req.params.id) },
//             data: { ...req.body },
//         })

//         return res.json({
//             msg: `Animal with the id: ${req.params.id} successfully updated`,
//             data: animal,
//         })
//     } catch (err) {
//         return res.status(500).json({
//             msg: err.message,
//         })
//     }
// }

// /**
//  * @escription Deletes a specific animal by its ID.
//  * @name deleteAnimal
//  * @param {object} req - Express request object.
//  * @param {object} res - Express response object.
//  * @returns {Promise<void>} A promise that resolves when the animal is deleted successfully.
//  * @throws {Error} If an error occurs while deleting the animal or if it does not exist.
//  */
// const deleteAnimal = async (req, res) => {
//     try {
//         const animal = await prisma.animal.findUnique({
//             where: { id: Number(req.params.id) },
//         })

//         if (!animal) {
//             return res
//                 .status(404)
//                 .json({
//                     msg: `No animal with the id: ${req.params.id} found`,
//                 })
//         }

//         await prisma.animal.delete({
//             where: { id: Number(req.params.id) },
//         })

//         return res.json({
//             msg: `Animal with the id: ${req.params.id} successfully deleted`,
//         })
//     } catch (err) {
//         return res.status(500).json({
//             msg: err.message,
//         })
//     }
// }

//   export {
//     createAnimal,
//     getAnimals,
//     getAnimal,
//     updateAnimal,
//     deleteAnimal
//   }