/**
 * @file manages all operations related to awards
 * @author Elizabeth Minty
 */
const createAward = async (req, res) => {
    try {
      await prisma.Award.create({
        data: { ...req.body },
      });
  
      const newAwards = await prisma.award.findMany();
  
      return res.status(201).json({
        msg: "Award successfully created",
        data: newAwards,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getAwards = async (req, res) => {
    try {
      const awards = await prisma.award.findMany();
  
      if (awards.length === 0) {
        return res.status(404).json({ msg: "No awards found" });
      }
  
      return res.json({ data: awards });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getAward = async (req, res) => {
    try {
        const award = await prisma.award.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!award) {
            res.status(404).json({ msg: `Award with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  const updateAward = async (req, res) => {
    try {
        let award = await prisma.award.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!award) {
            return res
                .status(404)
                .json({
                    msg: `No award with the id: ${req.params.id} found`,
                })
        }

        award = await prisma.award.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        })

        return res.json({
            msg: `Award with the id: ${req.params.id} successfully updated`,
            data: award,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const deleteAward = async (req, res) => {
    try {
        const award = await prisma.award.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!award) {
            return res
                .status(404)
                .json({
                    msg: `No award with the id: ${req.params.id} found`,
                })
        }

        await prisma.award.delete({
            where: { id: Number(req.params.id) },
        })

        return res.json({
            msg: `Award with the id: ${req.params.id} successfully deleted`,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

  export {
    createAward,
    getAwards,
    getAward,
    updateAward,
    deleteAward
  }