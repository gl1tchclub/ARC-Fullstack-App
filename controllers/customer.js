/**
* @file manages all operations related to customers
* @author Elizabeth Minty
*/

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const createCustomer = async (req, res) => {
    try {
      await prisma.customer.create({
        data: { ...req.body },
      });
  
      const newCustomers = await prisma.customer.findMany();
  
      return res.status(201).json({
        msg: "Customer successfully created",
        data: newCustomers,
      });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };
  
  const getCustomers = async (req, res) => {
    try {
      const customers = await prisma.customer.findMany();
  
      if (customers.length === 0) {
        return res.status(404).json({ msg: "No customers found" });
      }
  
      return res.json({ data: customers });
    } catch (err) {
      return res.status(500).json({
        msg: err.message,
      });
    }
  };

  const getCustomer = async (req, res) => {
    try {
        const customer = await prisma.customer.findUnique( {
            where: { id: Number(req.params.id) },
        })

        if (!customer) {
            res.status(404).json({ msg: `customer with ID ${res.params.id} does not exist`})
        }
    } catch (err) {
        return res.status(500).json({
          msg: err.message,
        });
    }
  }

  const updateCustomer = async (req, res) => {
    try {
        let customer = await prisma.customer.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!customer) {
            return res
                .status(404)
                .json({
                    msg: `No customer with the id: ${req.params.id} found`,
                })
        }

        customer = await prisma.customer.update({
            where: { id: Number(req.params.id) },
            data: { ...req.body },
        })

        return res.json({
            msg: `Customer with the id: ${req.params.id} successfully updated`,
            data: customer,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

const deleteCustomer = async (req, res) => {
    try {
        const customer = await prisma.customer.findUnique({
            where: { id: Number(req.params.id) },
        })

        if (!customer) {
            return res
                .status(404)
                .json({
                    msg: `No customer with the id: ${req.params.id} found`,
                })
        }

        await prisma.customer.delete({
            where: { id: Number(req.params.id) },
        })

        return res.json({
            msg: `Customer with the id: ${req.params.id} successfully deleted`,
        })
    } catch (err) {
        return res.status(500).json({
            msg: err.message,
        })
    }
}

  export {
    createCustomer,
    getCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
  }