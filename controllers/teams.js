import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const getTeams = async (req, res) => {
    try {
        const sortBy = req.query.sortBy || "name";
        const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

        const query = {
            orderBy: {
                [sortBy]: sortOrder,
            },
            include: {
                members: true,
            },
        };

        if (req.query.name || req.query.eventTitle || req.query.country || req.query.city || req.query.numMembers) {
            query.where = {
                name: {
                    in: req.query.name || undefined,
                },
                eventTitle: {
                    in: req.query.eventTitle || undefined,
                },
                country: {
                    in: req.query.country || undefined,
                },
                city: {
                    in: req.query.city || undefined,
                },
                numMembers: {
                    in: req.query.numMembers || undefined,
                },
            };
        }

        //setting page number and page size from user for pagination
        const page = req.query.page ? parseInt(req.query.page) : null
        const pageSize = req.query.pageSize
            ? parseInt(req.query.pageSize)
            : null

        //display requested data according to the filter and pagesize
        const teams = await prisma.team.findMany({
            skip: pageSize * (page - 1),
            take: !pageSize ? 25 : pageSize, //if pageSize not defined, default is 25
            where: query,
        })

        if (teams.length === 0) {
            return res.status(200).json({ msg: "No teams found" })
        }
        
        return res.json({ data: teams })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

export { getTeams }
