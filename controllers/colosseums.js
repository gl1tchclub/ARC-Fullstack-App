import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getColosseums = async (req, res) => {
    try {
        const { colosseumName, country, city, terrainType, events } = req.query
        const match = {}

        if (colosseumName) {
            match.colosseumName = colosseumName
        }
        
        if (country) {
            match.country = country
        }

        if (city) {
            match.city = city
        }

        if (terrainType) {
            match.terrainType = terrainType
        }

        if (events) {
            match.events = events
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

export { getColosseums }