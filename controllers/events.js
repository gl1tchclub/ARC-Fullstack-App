import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const getEvents = async (req, res) => {
  try {
    const sortBy = req.query.sortBy || "name"
    const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc"

    const query = {
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        awards: true,
        teams: true,
        colosseum: true,
      },
    }

    if (req.query.name || req.query.venue || req.query.date) {
      query.where = {
        name: {
          in: req.query.name || undefined,
        },
        venue: {
          in: req.query.venue || undefined,
        },
        date: {
          in: req.query.date || undefined,
        },
      }
    }

    //setting page number and page size from user for pagination
    const page = req.query.page ? parseInt(req.query.page) : null
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : null

    //display requested data according to the filter and pagesize
    const events = await prisma.event.findMany({
      skip: pageSize * (page - 1),
      take: !pageSize ? 25 : pageSize, //if pageSize not defined, default is 25
      where: query,
    })

    if (events.length === 0) {
      return res.status(200).json({ msg: "No events found" })
    }

    return res.json({ data: events })
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    })
  }
}

export { getEvents }
