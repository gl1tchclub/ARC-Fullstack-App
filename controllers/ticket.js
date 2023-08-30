/**
 * @file manages all operations related to tickets
 * @author Elizabeth Minty
 */
const createTicket = async (req, res) => {
    try {
      await prisma.ticket.create({
        data: { ...req.body },
      });
  
      const newTickets = await prisma.ticket.findMany();
  
      return res.status(201).json({
        msg: "Ticket successfully created",
        data: newTickets,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getTickets = async (req, res) => {
    try {
      const tickets = await prisma.ticket.findMany();
  
      if (tickets.length === 0) {
        return res.status(404).json({ msg: "No tickets found" });
      }
  
      return res.json({ data: tickets });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getTicket = async (req, res) => {
    try {
        const ticket = await prisma.ticket.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!ticket) {
            res.status(404).json({ msg: `Ticket with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  const updateTicket = async (req, res) => {
    try {
        let ticket = await prisma.ticket.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!ticket) {
            return res
                .status(404)
                .json({
                    msg: `No ticket with the id: ${req.params.id} found`,
                })
        }

        ticket = await prisma.ticket.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        })

        return res.json({
            msg: `Ticket with the id: ${req.params.id} successfully updated`,
            data: ticket,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const deleteTicket = async (req, res) => {
    try {
        const ticket = await prisma.ticket.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!Ticket) {
            return res
                .status(404)
                .json({
                    msg: `No Ticket with the id: ${req.params.id} found`,
                })
        }

        await prisma.ticket.delete({
            where: { id: Number(req.params.id) },
        })

        return res.json({
            msg: `Ticket with the id: ${req.params.id} successfully deleted`,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

  export {
    createTicket,
    getTickets,
    getTicket,
    updateTicket,
    deleteTicket
  }