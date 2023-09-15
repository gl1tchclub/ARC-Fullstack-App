import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const getAnimals = async (req, res) => {
  try {
    const sortBy = req.query.sortBy || "name"
    const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc"

    const query = {
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        owner: true,
      },
      skip: pageSize * (page - 1),
      take: !pageSize ? 25 : pageSize, //if pageSize not defined, default is 25
    }

    if (
      req.query.name ||
      req.query.taxonomy ||
      req.query.species ||
      req.query.rank ||
      req.query.ownerId
    ) {
      query.where = {
        name: {
          in: req.query.name || undefined,
        },
        taxonomy: {
          in: req.query.taxonomy || undefined,
        },
        species: {
          in: req.query.species || undefined,
        },
        rank: {
          in: req.query.rank || undefined,
        },
        ownerId: {
          in: req.query.ownerId || undefined,
        },
      }
    }

    //display requested data according to the filter and pagesize
    const animals = await prisma.animal.findMany(query)

    if (animals.length === 0) {
      return res.status(200).json({ msg: "No animals found" })
    }

    return res.json({ data: animals })
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    })
  }
}

export { getAnimals }
