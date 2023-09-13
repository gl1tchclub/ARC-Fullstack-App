import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAwards = async (req, res) => {
  try {
    const sortBy = req.query.sortBy || "name";
    const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

    const query = {
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        event: true,
      },
    };

    if (
      req.query.name ||
      req.query.type ||
      req.query.quantity ||
      req.query.eventId
    ) {
      query.where = {
        name: {
          in: req.query.name || undefined,
        },
        type: {
          in: req.query.type || undefined,
        },
        quantity: {
          in: req.query.quantity || undefined,
        },
        eventId: {
          in: req.query.eventId || undefined,
        },
      };
    }

    //setting page number and page size from user for pagination
    const page = req.query.page ? parseInt(req.query.page) : null;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : null;

    //display requested data according to the filter and pagesize
    const awards = await prisma.award.findMany({
      skip: pageSize * (page - 1),
      take: !pageSize ? 25 : pageSize, //if pageSize not defined, default is 25
      where: query,
    });

    if (awards.length === 0) {
      return res.status(200).json({ msg: "No awards found" });
    }

    return res.json({ data: awards });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { getAwards };
