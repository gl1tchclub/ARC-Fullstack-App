import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getParticipants = async (req, res) => {
  try {
    const sortBy = req.query.sortBy || "name";
    const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

    const query = {
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        animals: true,
      },
    };

    if (req.query.name || req.query.memberOf || req.query.numberOfAwards) {
      query.where = {
        name: {
          in: req.query.name || undefined,
        },
        memberOf: {
          in: req.query.memberOf || undefined,
        },
        numberOfAwards: {
          in: req.query.numberOfAwards || undefined,
        },
      };
    }

    //setting page number and page size from user for pagination
    const page = req.query.page ? parseInt(req.query.page) : null;
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : null;

    //display requested data according to the filter and pagesize
    const participants = await prisma.participant.findMany({
      skip: pageSize * (page - 1),
      take: !pageSize ? 25 : pageSize, //if pageSize not defined, default is 25
      where: query,
    });

    if (participants.length === 0) {
      return res.status(200).json({ msg: "No participants found" });
    }

    return res.json({ data: participants });
  } catch (err) {
    return res.status(500).json({
      msg: err.message,
    });
  }
};

export { getParticipants };
