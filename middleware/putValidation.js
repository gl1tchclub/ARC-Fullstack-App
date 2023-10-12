/**
 * @file validation functions for various data entities
 * @author Elizabeth Minty
 */
import Joi from "joi"

// Validates animal fields and constraints
const validatePutAnimal = (req, res, next) => {
  const animalSchema = Joi.object({
    name: Joi.string().min(2).max(50).messages({
      "string.base": "Name should be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must have a minimum length of {#limit}",
      "string.max": "Name must have a maximum length of {#limit}",
    }),
    taxonomy: Joi.string().min(4).max(9).messages({
      "string.base": "Taxonomy must be a string",
      "string.empty": "Taxonomy must not be empty",
    }),
    species: Joi.string().min(3).max(100).messages({
      "string.base": "Species should be a string",
      "string.empty": "Species cannot be empty",
      "string.min": "Species must have a minimum length of {#limit}",
      "string.max": "Species must have a maximum length of {#limit}",
    }),
    rank: Joi.string().min(4).max(9).messages({
      "string.base": "Rank must be a string",
      "string.empty": "Rank must not be empty",
      "string.min": "Species must have a minimum length of {#limit}",
      "string.max": "Species must have a maximum length of {#limit}",
    }),
    ownerName: Joi.string().min(2).max(50).messages({
      "string.base": "Owner Name should be a string",
      "string.empty": "Owner Name cannot be empty",
      "string.min": "Owner Name must have a minimum length of {#limit}",
      "string.max": "Owner Name must have a maximum length of {#limit}",
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

// Validates participant fields and constraints
const validatePutParticipant = (req, res, next) => {
  const participantSchema = Joi.object({
    alias: Joi.string().min(2).max(50).messages({
      "string.base": "Alias should be a string",
      "string.empty": "Alias cannot be empty",
      "string.min": "Alias should have a minimum length of {#limit}",
      "string.max": "Alias should have a maximum length of {#limit}",
    }),
    memberOf: Joi.string().min(2).max(100).messages({
      "string.base": "MemberOf should be a string",
      "string.empty": "MemberOf cannot be empty",
      "string.min": "MemberOf must have a minimum length of {#limit}",
      "string.max": "MemberOf must have a maximum length of {#limit}",
    }),
    animals: Joi.array().items(Joi.string()).max(6).messages({
      "string.base": "Animals should be a string",
      "string.empty": "Animals cannot be empty",
      "array.max": "Animals must have a maximum length of {#limit}",
    }),
    age: Joi.number().integer().min(15).messages({
      "number.base": "Age must be a number",
      "number.empty": "Age cannot be empty",
      "integer.min": "Age must be minimum {#limit}",
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

// Validates event fields and constraints
const validatePutEvent = (req, res, next) => {
  const eventSchema = Joi.object({
    eventTitle: Joi.string().min(5).max(100).messages({
      "string.base": "Event Title should be a string",
      "string.empty": "Event Title cannot be empty",
      "string.min": "Event Title should have a minimum length of {#limit}",
      "string.max": "Event Title should have a maximum length of {#limit}",
    }),
    venue: Joi.string().min(5).max(50).messages({
      "string.base": "Venue should be a string",
      "string.empty": "Venue cannot be empty",
      "string.min": "Venue should have a minimum length of {#limit}",
      "string.max": "Venue should have a maximum length of {#limit}",
    }),
    date: Joi.date().greater("1-1-1990").messages({
      "date.base": "Date should not be empty",
      "date.empty": "Date should not be empty",
      "date.greater": "Date must be greater than {#limit}",
    }),
    awards: Joi.array().items(Joi.string()).min(1).max(10).messages({
      "string.base": "Members should be a string",
      "string.empty": "Members cannot be empty",
      "array.max": "Members must have a maximum length of {#limit}",
    }),
    teams: Joi.array().items(Joi.string()).max(8).messages({
      "string.base": "Teams should be a string",
      "string.empty": "Teams cannot be empty",
      "array.max": "Events must have a maximum number of {#limit}",
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

// Validates award fields and constraints
const validatePutAward = (req, res, next) => {
  const awardSchema = Joi.object({
    awardTitle: Joi.string().min(2).max(20).messages({
      "string.base": "Award Title should be a string",
      "string.empty": "Award Title cannot be empty",
      "string.min": "Award Title should have a minimum length of {#limit}",
      "string.max": "Award Title should have a maximum length of {#limit}",
    }),
    type: Joi.string().min(2).max(20).messages({
      "string.base": "Type should be a string",
      "string.empty": "Type cannot be empty",
      "string.min": "Type should have a minimum length of {#limit}",
      "string.max": "Type should have a maximum length of {#limit}",
    }),
    quantity: Joi.number()
      .integer()
      .options({ convert: false })
      .min(1)
      .max(10)
      
      .messages({
        "number.base": "Quantity must be a number",
        "number.empty": "Quantity cannot be empty",
        "number.min": "Quantity should have a minimum length of {#limit}",
        "number.max": "Quantity should have a maximum length of {#limit}",
      }),
    eventTitle: Joi.string().min(2).max(100).messages({
      "string.base": "Event Title should be a string",
      "string.empty": "Event Title cannot be empty",
      "string.min": "Event Title should have a minimum length of {#limit}",
      "string.max": "Event Title should have a maximum length of {#limit}",
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

// Validates colosseum fields and constraints
const validatePutColosseum = (req, res, next) => {
  const colosseumSchema = Joi.object({
    name: Joi.string().min(5).max(50).messages({
      "string.base": "Name should be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name should have a minimum length of {#limit}",
      "string.max": "Name should have a maximum length of {#limit}",
    }),
    country: Joi.string().min(5).max(50).messages({
      "string.base": "Country should be a string",
      "string.empty": "Country cannot be empty",
      "string.min": "Country should have a minimum length of {#limit}",
      "string.max": "Country should have a maximum length of {#limit}",
    }),
    city: Joi.string().min(3).max(50).messages({
      "string.base": "City should be a string",
      "string.empty": "City cannot be empty",
      "string.min": "City should have a minimum length of {#limit}",
      "string.max": "City should have a maximum length of {#limit}",
    }),
    terrainType: Joi.string().min(3).max(50).messages({
      "string.base": "Terrain Type should be a string",
      "string.empty": "Terrain Type cannot be empty",
      "string.min": "Terrain Type should have a minimum length of {#limit}",
      "string.max": "Terrain Type should have a maximum length of {#limit}",
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

// Validates team fields and constraints
const validatePutTeam = (req, res, next) => {
  const teamSchema = Joi.object({
    teamName: Joi.string().min(2).max(100).messages({
      "string.base": "Team Name should be a string",
      "string.empty": "Team Name cannot be empty",
      "string.min": "Team Name must have a minimum length of {#limit}",
      "string.max": "Team Name must have a maximum length of {#limit}",
    }),
    eventTitle: Joi.string().min(2).max(100).messages({
      "string.base": "Event Title should be a string",
      "string.empty": "Event Title cannot be empty",
      "string.min": "Event Title must have a minimum length of {#limit}",
      "string.max": "Event Title must have a maximum length of {#limit}",
    }),
    country: Joi.string().min(2).max(100).messages({
      "string.base": "Country should be a string",
      "string.empty": "Country cannot be empty",
      "string.min": "Country must have a minimum length of {#limit}",
      "string.max": "Country must have a maximum length of {#limit}",
    }),
    city: Joi.string().min(2).max(100).messages({
      "string.base": "City should be a string",
      "string.empty": "City cannot be empty",
      "string.min": "City must have a minimum length of {#limit}",
      "string.max": "City must have a maximum length of {#limit}",
    }),
    numMembers: Joi.number().min(0).max(8).messages({
      "number.base": "Number of Members must be an number",
      "number.empty": "Number of Members cannot be empty",
      "number.min": "Number of Members must be at least {#limit}",
      "number.max": "Number of Members must be less than {#limit}",
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
  validatePutAnimal,
  validatePutParticipant,
  validatePutTeam,
  validatePutColosseum,
  validatePutEvent,
  validatePutAward,
}
