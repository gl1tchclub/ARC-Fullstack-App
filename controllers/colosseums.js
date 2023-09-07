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

        //setting page number and page size from user for pagination
        const page = req.query.page ? parseInt(req.query.page) : null
        const pageSize = req.query.pageSize
            ? parseInt(req.query.pageSize)
            : null

        //display requested data according to the filter and pagesize
        const colosseums = await prisma.colosseum.findMany({
            skip: pageSize * (page - 1),
            take: !pageSize ? 25 : pageSize, //if pageSize not defined, default is 25
            where: match,
        })
        return res.json({ data: colosseums })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { getColosseums }
