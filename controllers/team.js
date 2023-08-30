/**
 * @file manages all operations related to teams
 * @author Elizabeth Minty
 */
const createTeam = async (req, res) => {
    try {
      await prisma.team.create({
        data: { ...req.body },
      });
  
      const newTeams = await prisma.team.findMany();
  
      return res.status(201).json({
        msg: "Team successfully created",
        data: newTeams,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getTeams = async (req, res) => {
    try {
      const teams = await prisma.team.findMany();
  
      if (teams.length === 0) {
        return res.status(404).json({ msg: "No teams found" });
      }
  
      return res.json({ data: teams });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getTeam = async (req, res) => {
    try {
        const team = await prisma.team.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!team) {
            res.status(404).json({ msg: `Team with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  const updateTeam = async (req, res) => {
    try {
        let team = await prisma.team.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!team) {
            return res
                .status(404)
                .json({
                    msg: `No team with the id: ${req.params.id} found`,
                })
        }

        team = await prisma.team.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        })

        return res.json({
            msg: `Team with the id: ${req.params.id} successfully updated`,
            data: team,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const deleteTeam = async (req, res) => {
    try {
        const team = await prisma.team.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!team) {
            return res
                .status(404)
                .json({
                    msg: `No team with the id: ${req.params.id} found`,
                })
        }

        await prisma.team.delete({
            where: { id: Number(req.params.id) },
        })

        return res.json({
            msg: `Team with the id: ${req.params.id} successfully deleted`,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

  export {
    createTeam,
    getTeams,
    getTeam,
    updateTeam,
    deleteTeam
  }