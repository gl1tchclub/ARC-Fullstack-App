import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getAnimals = async (req, res) => {
    try {
        const { name, taxonomy, species, rank, ownerId } = req.query
        const match = {}

        if (name) {
            match.name = name
        }

        const animals = await prisma.animal.findMany({
            where: match,
        })
        return res.json({ data: animals })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { getAnimals }
