/**
 * @file 
 * @author Elizabeth Minty
 */
import Joi from "joi";

//INSTITUTION
const validatePostInstitution = (req, res, next) => {
  const institutionSchema = Joi.object({
    name: Joi.string().min(3).max(100).required().messages({
      "string.base": "Name should be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name should have a minimum length of {#limit}",
      "string.max": "Name should have a maximum length of {#limit}",
      "any.required": "Name is required",
    }),
    region: Joi.string().min(3).max(100).required().messages({
      "string.base": "Region should be a string",
      "string.empty": "Region cannot be empty",
      "string.min": "Region should have a minimum length of {#limit}",
      "string.max": "Region should have a maximum length of {#limit}",
      "any.required": "Region is required",
    }),
    country: Joi.string().min(3).max(100).required().messages({
      "string.base": "Country should be a string",
      "string.empty": "Country cannot be empty",
      "string.min": "Country should have a minimum length of {#limit}",
      "string.max": "Country should have a maximum length of {#limit}",
      "any.required": "Country is required",
    }),
  });

  const { error } = institutionSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

// ANIMAL
const validatePostAnimal = (req, res, next) => {
  const animalSchema = Joi.object({
    //insert checks
  });

  const { error } = animalSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostParticipant = (req, res, next) => {
  const participantSchema = Joi.object({
    //insert checks
  });

  const { error } = participantSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostEvent = (req, res, next) => {
  const eventSchema = Joi.object({
    //insert checks
  });

  const { error } = eventSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostAward = (req, res, next) => {
  const awardSchema = Joi.object({
    //insert checks
  });

  const { error } = awardSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostColosseum = (req, res, next) => {
  const colosseumSchema = Joi.object({
    //insert checks
  });

  const { error } = colosseumSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostCustomer = (req, res, next) => {
  const customerSchema = Joi.object({
    //insert checks
  });

  const { error } = customerSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostTicket = (req, res, next) => {
  const ticketSchema = Joi.object({
    //insert checks
  });

  const { error } = ticketSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePostTeam = (req, res, next) => {
  const teamSchema = Joi.object({
    //insert checks
  });

  const { error } = teamSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      msg: error.details[0].message,
    });
  }

  next();
};
export { validatePostInstitution, validatePostAnimal, validatePostParticipant, validatePostCustomer, validatePostTeam, validatePostColosseum, validatePostEvent, validatePostAward,
  validatePostTicket };