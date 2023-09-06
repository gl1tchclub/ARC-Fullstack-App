import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getColosseums = async (req, res) => {
    try {
        const { colosseumName, country, city, terrainType, events } = req.query
        const match = {}

        if (colosseumName) {
            match.colosseumName = colosseumName
        }
        

        const colosseums = await prisma.colosseum.findMany({
            where: match
        })
        return res.json({data: colosseums})
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { getAnimals }