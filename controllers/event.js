// Note: Some code has been omitted for brevity

const createEvent = async (req, res) => {
    try {
      await prisma.event.create({
        data: { ...req.body },
      });
  
      const newEvents = await prisma.event.findMany();
  
      return res.status(201).json({
        msg: "Event successfully created",
        data: newEvents,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getEvents = async (req, res) => {
    try {
      const events = await prisma.event.findMany();
  
      if (events.length === 0) {
        return res.status(404).json({ msg: "No events found" });
      }
  
      return res.json({ data: events });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getEvent = async (req, res) => {
    try {
        const event = await prisma.event.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!event) {
            res.status(404).json({ msg: `Event with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  const updateEvent = async (req, res) => {
    try {
        let event = await prisma.event.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!event) {
            return res
                .status(404)
                .json({
                    msg: `No event with the id: ${req.params.id} found`,
                })
        }

        event = await prisma.event.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        })

        return res.json({
            msg: `Event with the id: ${req.params.id} successfully updated`,
            data: event,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const deleteEvent = async (req, res) => {
    try {
        const event = await prisma.event.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!event) {
            return res
                .status(404)
                .json({
                    msg: `No Event with the id: ${req.params.id} found`,
                })
        }

        await prisma.event.delete({
            where: { id: Number(req.params.id) },
        })

        return res.json({
            msg: `Event with the id: ${req.params.id} successfully deleted`,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

  export {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent
  }