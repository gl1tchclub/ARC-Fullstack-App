// Note: Some code has been omitted for brevity

const createDepartment = async (req, res) => {
    try {
      await prisma.department.create({
        data: { ...req.body },
      });
  
      const newDepartments = await prisma.department.findMany();
  
      return res.status(201).json({
        msg: "Department successfully created",
        data: newDepartments,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getDepartments = async (req, res) => {
    try {
      const departments = await prisma.department.findMany();
  
      if (departments.length === 0) {
        return res.status(404).json({ msg: "No departments found" });
      }
  
      return res.json({ data: departments });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getDepartment = async (req, res) => {
    try {
        const department = await prisma.department.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!department) {
            res.status(404).json({ msg: `Department with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  export {
    createDepartment,
    getDepartments,
    getDepartment
  }