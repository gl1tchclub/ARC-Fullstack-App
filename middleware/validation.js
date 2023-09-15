/**
 * @file validation functions for various data entities
 * @author Elizabeth Minty
 */
import Joi from "joi"

// ANIMAL
const validatePostAnimal = (req, res, next) => {
  const animalSchema = Joi.object({
    name: Joi.string().min(2).max(50).required().messages({
      "string.base": "Name should be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must have a minimum length of {#limit}",
      "string.max": "Name must have a maximum length of {#limit}",
      "any.required": "Name is required",
    }),
    taxonomy: Joi.string().min(4).max(9).required().messages({
      "string.base": "Taxonomy must be a string",
      "string.empty": "Taxonomy must not be empty",
      "any.required": "Taxonomy type is required",
    }),
    species: Joi.string().min(3).max(100).required().messages({
      "string.base": "Species should be a string",
      "string.empty": "Species cannot be empty",
      "string.min": "Species must have a minimum length of {#limit}",
      "string.max": "Species must have a maximum length of {#limit}",
      "any.required": "Species is required",
    }),
    rank: Joi.string().min(4).max(9).required().messages({
      "string.base": "Rank must be a string",
      "string.empty": "Rank must not be empty",
      "string.min": "Species must have a minimum length of {#limit}",
      "string.max": "Species must have a maximum length of {#limit}",
      "any.required": "Rank is required",
    }),
    ownerName: Joi.string().min(2).max(50).required().messages({
      "string.base": "Owner Name should be a string",
      "string.empty": "Owner Name cannot be empty",
      "string.min": "Owner Name must have a minimum length of {#limit}",
      "string.max": "Owner Name must have a maximum length of {#limit}",
      "any.required": "Owner Name is required",
    }),
  })

  const { error } = animalSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    })
  }

  next()
}

const validatePostParticipant = (req, res, next) => {
  const participantSchema = Joi.object({
    alias: Joi.string().min(2).max(50).required().messages({
      "string.base": "Alias should be a string",
      "string.empty": "Alias cannot be empty",
      "string.min": "Alias should have a minimum length of {#limit}",
      "string.max": "Alias should have a maximum length of {#limit}",
      "any.required": "Alias is required",
    }),
    memberOf: Joi.string().min(2).max(100).messages({
      "string.base": "MemberOf should be a string",
      "string.empty": "MemberOf cannot be empty",
      "string.min": "MemberOf must have a minimum length of {#limit}",
      "string.max": "MemberOf must have a maximum length of {#limit}",
    }),
    animals: Joi.array().items(Joi.string().required()).max(6).messages({
      "string.base": "Animals should be a string",
      "string.empty": "Animals cannot be empty",
      "array.max": "Animals must have a maximum length of {#limit}",
      "array.items.required": "At least one Animal is required",
    }),
    age: Joi.number().integer().min(15).required().messages({
      "integer.base": "Age must be a number",
      "number.empty": "Age cannot be empty",
      "integer.min": "Age must be minimum {#limit}",
      "any.required": "Age is required",
    }),
  })

  const { error } = participantSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    })
  }

  next()
}

const validatePostEvent = (req, res, next) => {
  const eventSchema = Joi.object({
    eventTitle: Joi.string().min(5).max(100).required().messages({
      "string.base": "Event Title should be a string",
      "string.empty": "Event Title cannot be empty",
      "string.min": "Event Title should have a minimum length of {#limit}",
      "string.max": "Event Title should have a maximum length of {#limit}",
      "any.required": "Event Title is required",
    }),
    venue: Joi.string().min(5).max(50).required().messages({
      "string.base": "Venue should be a string",
      "string.empty": "Venue cannot be empty",
      "string.min": "Venue should have a minimum length of {#limit}",
      "string.max": "Venue should have a maximum length of {#limit}",
      "any.required": "Venue is required",
    }),
    date: Joi.date().greater("1-1-1990").required().messages({
      "date.base": "Date should not be empty",
      "date.empty": "Date should not be empty",
      "date.greater": "Date must be greater than {#limit}",
      "any.required": "Date is required",
    }),
    awards: Joi.array()
      .items(Joi.string().required())
      .min(1)
      .max(10)
      .messages({
        "string.base": "Members should be a string",
        "string.empty": "Members cannot be empty",
        "array.max": "Members must have a maximum length of {#limit}",
        "array.items.required": "At least two Members are required",
      }),
    teams: Joi.array()
      .items(Joi.string().required(), Joi.string().required())
      .max(8)
      .messages({
        "string.base": "Members should be a string",
        "string.empty": "Members cannot be empty",
        "array.max": "Members must have a maximum length of {#limit}",
        "array.items.required": "At least two Members are required",
      }),
  })

  const { error } = eventSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    })
  }

  next()
}

const validatePostAward = (req, res, next) => {
  const awardSchema = Joi.object({
    awardTitle: Joi.string().min(4).max(20).required().messages({
      "string.base": "Award Title should be a string",
      "string.empty": "Award Title cannot be empty",
      "string.min": "Award Title should have a minimum length of {#limit}",
      "string.max": "Award Title should have a maximum length of {#limit}",
      "any.required": "Award Title is required",
    }),
    type: Joi.string().min(3).max(20).required().messages({
      "string.base": "Type should be a string",
      "string.empty": "Type cannot be empty",
      "string.min": "Type should have a minimum length of {#limit}",
      "string.max": "Type should have a maximum length of {#limit}",
      "any.required": "Type is required",
    }),
    quantity: Joi.number().integer().min(1).max(10).required().messages({
      "integer.base": "Quantity must be a number",
      "number.empty": "Quantity cannot be empty",
      "integer.min": "Quantity should have a minimum length of {#limit}",
      "integer.max": "Quantity should have a maximum length of {#limit}",
      "any.required": "Quantity is required",
    }),
    eventTitle: Joi.string().min(5).max(100).required().messages({
      "string.base": "Event Title should be a string",
      "string.empty": "Event Title cannot be empty",
      "string.min": "Event Title should have a minimum length of {#limit}",
      "string.max": "Event Title should have a maximum length of {#limit}",
      "any.required": "Event Title is required",
    }),
  })

  const { error } = awardSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    })
  }

  next()
}

const validatePostColosseum = (req, res, next) => {
  const colosseumSchema = Joi.object({
    name: Joi.string().min(5).max(50).required().messages({
      "string.base": "Name should be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name should have a minimum length of {#limit}",
      "string.max": "Name should have a maximum length of {#limit}",
      "any.required": "Name is required",
    }),
    country: Joi.string().min(5).max(50).required().messages({
      "string.base": "Country should be a string",
      "string.empty": "Country cannot be empty",
      "string.min": "Country should have a minimum length of {#limit}",
      "string.max": "Country should have a maximum length of {#limit}",
      "any.required": "Country is required",
    }),
    city: Joi.string().min(3).max(50).required().messages({
      "string.base": "City should be a string",
      "string.empty": "City cannot be empty",
      "string.min": "City should have a minimum length of {#limit}",
      "string.max": "City should have a maximum length of {#limit}",
      "any.required": "City is required",
    }),
    terrainType: Joi.string().min(3).max(50).required().messages({
      "string.base": "Terrain Type should be a string",
      "string.empty": "Terrain Type cannot be empty",
      "string.min": "Terrain Type should have a minimum length of {#limit}",
      "string.max": "Terrain Type should have a maximum length of {#limit}",
      "any.required": "Terrain Type is required",
    }),
    events: Joi.array().items(Joi.string()).messages({
      "string.base": "Event should be a string",
      "string.empty": "Event cannot be empty",
      "array.max": "Events must have a maximum length of {#limit}",
    }),
  })

  const { error } = colosseumSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    })
  }

  next()
}

const validatePostTeam = (req, res, type, next) => {
  const teamSchema = Joi.object({
    teamName: Joi.string().min(2).max(100).required().messages({
      "string.base": "Team Name should be a string",
      "string.empty": "Team Name cannot be empty",
      "string.min": "Team Name must have a minimum length of {#limit}",
      "string.max": "Team Name must have a maximum length of {#limit}",
      "any.required": "Team Name is required",
    }),
    members: Joi.array
      .items(Joi.string().required(), Joi.string().required())
      .max(8)
      .required()
      .messages({
        "string.base": "Members should be a string",
        "string.empty": "Members cannot be empty",
        "array.max": "Members must have a maximum length of {#limit}",
        "array.items.required": "At least two Members are required",
      }),
    eventTitle: Joi.string().min(2).max(100).messages({
      "string.base": "Event Title should be a string",
      "string.empty": "Event Title cannot be empty",
      "string.min": "Event Title must have a minimum length of {#limit}",
      "string.max": "Event Title must have a maximum length of {#limit}",
    }),
    country: Joi.string().min(2).max(100).required().messages({
      "string.base": "Country should be a string",
      "string.empty": "Country cannot be empty",
      "string.min": "Country must have a minimum length of {#limit}",
      "string.max": "Country must have a maximum length of {#limit}",
      "any.required": "Country is required",
    }),
    city: Joi.string().min(2).max(100).required().messages({
      "string.base": "City should be a string",
      "string.empty": "City cannot be empty",
      "string.min": "City must have a minimum length of {#limit}",
      "string.max": "City must have a maximum length of {#limit}",
      "any.required": "City is required",
    }),
    numMembers: Joi.number().integer().min(2).max(8).required().messages({
      "integer.base": "Number of Members must be a number",
      "number.empty": "Number of Members cannot be empty",
      "integer.min": "Number of Members should have a minimum length of {#limit}",
      "integer.max": "Number of Members should have a maximum length of {#limit}",
      "any.required": "Number of Members is required",
    }),
  })

  const { error } = teamSchema.validate(req.body)

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    })
  }

  next()
}

export {
  validatePostAnimal,
  validatePostParticipant,
  validatePostTeam,
  validatePostColosseum,
  validatePostEvent,
  validatePostAward,
}
