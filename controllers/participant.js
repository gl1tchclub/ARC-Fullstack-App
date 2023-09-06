// /**
//  * @file manages all operations related to participants
//  * @author Elizabeth Minty
//  */
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// const createParticipant = async (req, res) => {
//     try {
//       await prisma.participant.create({
//         data: { ...req.body },
//       });
  
//       const newParticipants = await prisma.participant.findMany();
  
//       return res.status(201).json({
//         msg: "Participant successfully created",
//         data: newParticipants,
//       });
//     } catch (err) {
//       return res.status(500).json({
//         msg: err.message,
//       });
//     }
//   };
  
//   const getParticipants = async (req, res) => {
//     try {
//       const participants = await prisma.participant.findMany();
  
//       if (participants.length === 0) {
//         return res.status(404).json({ msg: "No participants found" });
//       }
  
//       return res.json({ data: participants });
//     } catch (err) {
//       return res.status(500).json({
//         msg: err.message,
//       });
//     }
//   };

//   const getParticipant = async (req, res) => {
//     try {
//         const participant = await prisma.participant.findUnique( {
//             where: { id: Number(req.params.id) },
//         })

//         if (!participant) {
//             res.status(404).json({ msg: `Participant with ID ${res.params.id} does not exist`})
//         }
//     } catch (err) {
//         return res.status(500).json({
//           msg: err.message,
//         });
//     }
//   }

//   const updateParticipant = async (req, res) => {
//     try {
//         let participant = await prisma.participant.findUnique({
//             where: { id: Number(req.params.id) },
//         })

//         if (!participant) {
//             return res
//                 .status(404)
//                 .json({
//                     msg: `No participant with the id: ${req.params.id} found`,
//                 })
//         }

//         participant = await prisma.participant.update({
//             where: { id: Number(req.params.id) },
//             data: { ...req.body },
//         })

//         return res.json({
//             msg: `Participant with the id: ${req.params.id} successfully updated`,
//             data: participant,
//         })
//     } catch (err) {
//         return res.status(500).json({
//             msg: err.message,
//         })
//     }
// }

// const deleteParticipant = async (req, res) => {
//     try {
//         const participant = await prisma.participant.findUnique({
//             where: { id: Number(req.params.id) },
//         })

//         if (!participant) {
//             return res
//                 .status(404)
//                 .json({
//                     msg: `No participant with the id: ${req.params.id} found`,
//                 })
//         }

//         await prisma.participant.delete({
//             where: { id: Number(req.params.id) },
//         })

//         return res.json({
//             msg: `Participant with the id: ${req.params.id} successfully deleted`,
//         })
//     } catch (err) {
//         return res.status(500).json({
//             msg: err.message,
//         })
//     }
// }

//   export {
//     createParticipant,
//     getParticipants,
//     getParticipant,
//     updateParticipant,
//     deleteParticipant
//   }