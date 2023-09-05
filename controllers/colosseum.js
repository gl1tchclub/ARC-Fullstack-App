/**
 * @file manages all operations related to colosseums
 * @author Elizabeth Minty
 */

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createColosseum = async (req, res) => {
    try {
      await prisma.colosseum.create({
        data: { ...req.body },
      });
  
      const newColosseums = await prisma.colosseum.findMany();
  
      return res.status(201).json({
        msg: "Colosseum successfully created",
        data: newColosseums,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getColosseums = async (req, res) => {
    try {
      const colosseums = await prisma.colosseum.findMany();
  
      if (colosseums.length === 0) {
        return res.status(404).json({ msg: "No colosseums found" });
      }
  
      return res.json({ data: colosseums });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getColosseum = async (req, res) => {
    try {
        const colosseum = await prisma.colosseum.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!colosseum) {
            res.status(404).json({ msg: `Colosseum with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  const updateColosseum = async (req, res) => {
    try {
        let colosseum = await prisma.colosseum.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!colosseum) {
            return res
                .status(404)
                .json({
                    msg: `No colosseum with the id: ${req.params.id} found`,
                })
        }

        colosseum = await prisma.colosseum.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        })

        return res.json({
            msg: `Colosseum with the id: ${req.params.id} successfully updated`,
            data: colosseum,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const deleteColosseum = async (req, res) => {
    try {
        const colosseum = await prisma.colosseum.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!colosseum) {
            return res
                .status(404)
                .json({
                    msg: `No colosseum with the id: ${req.params.id} found`,
                })
        }

        await prisma.colosseum.delete({
            where: { id: Number(req.params.id) },
        })

        return res.json({
            msg: `Colosseum with the id: ${req.params.id} successfully deleted`,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

  export {
    createColosseum,
    getColosseums,
    getColosseum,
    updateColosseum,
    deleteColosseum
  };