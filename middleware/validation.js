/**
 * @file validation functions for various data entities
 * @author Elizabeth Minty
 */
import Joi from 'joi'

// ANIMAL
const validatePostAnimal = (req, res, next) => {
    const animalSchema = Joi.object({
        name: Joi.string().min(2).max(100).required().messages({
            'string.base': 'Name should be a string',
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name must have a minimum length of {#limit}',
            'string.max': 'Name must have a maximum length of {#limit}',
            'any.required': 'Name is required',
        }),
        taxonomy: Joi.string().min(4).max(9).required().messages({
            'string.base': 'Taxonomy must be a string',
            'string.empty': 'Taxonomy must not be empty',
            'any.required': 'Taxonomy type is required',
        }),
        species: Joi.string().min(3).max(100).required().messages({
            'string.base': 'Species should be a string',
            'string.empty': 'Species cannot be empty',
            'string.min': 'Species must have a minimum length of {#limit}',
            'string.max': 'Species must have a maximum length of {#limit}',
            'any.required': 'Species is required',
        }),
        rank: Joi.string().required().messages({
            'string.base': 'Rank must be a string',
            'string.empty': 'Rank must not be empty',
            'any.required': 'Rank is required',
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
        //insert checks
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
        eventName: Joi.string().min(5).max(50).required().messages({
            'string.base': 'Event Name should be a string',
            'string.empty': 'Event Name cannot be empty',
            'string.min': 'Event Name should have a minimum length of {#limit}',
            'string.max': 'Event Name should have a maximum length of {#limit}',
            'any.required': 'Event Name is required',
        }),
        location: Joi.string().min(5).max(50).required().messages({
            'string.base': 'Location should be a string',
            'string.empty': 'Location cannot be empty',
            'string.min': 'Location should have a minimum length of {#limit}',
            'string.max': 'Location should have a maximum length of {#limit}',
            'any.required': 'Location is required',
        }),
        date: Joi.date().greater('1-1-1990').required().messages({
            'date.base': 'Date should not be empty',
            'date.empty': 'Date should not be empty',
            'date.greater': 'Date must be greater than {#limit}',
            'any.required': 'Date is required',
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
        awardName: Joi.string().min(4).max(20).required().messages({
            'string.base': 'Award Name should be a string',
            'string.empty': 'Award Name cannot be empty',
            'string.min': 'Award Name should have a minimum length of {#limit}',
            'string.max': 'Award Name should have a maximum length of {#limit}',
            'any.required': 'Award Name is required',
        }),
        type: Joi.string().min(3).max(20).required().messages({
            'string.base': 'Type should be a string',
            'string.empty': 'Type cannot be empty',
            'string.min': 'Type should have a minimum length of {#limit}',
            'string.max': 'Type should have a maximum length of {#limit}',
            'any.required': 'Type is required',
        }),
        quantity: Joi.number().integer().min(1).max(10).required().messages({
            'integer.base': 'Quantity must be a number',
            'number.empty': 'Quantity cannot be empty',
            'integer.min': 'Quantity should have a minimum length of {#limit}',
            'integer.max': 'Quantity should have a maximum length of {#limit}',
            'any.required': 'Quantity is required',
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
        colosseumName: Joi.string().min(5).max(50).required().messages({
            'string.base': 'Name should be a string',
            'string.empty': 'Name cannot be empty',
            'string.min': 'Name should have a minimum length of {#limit}',
            'string.max': 'Name should have a maximum length of {#limit}',
            'any.required': 'Name is required',
        }),
        country: Joi.string().min(5).max(50).required().messages({
            'string.base': 'Country should be a string',
            'string.empty': 'Country cannot be empty',
            'string.min': 'Country should have a minimum length of {#limit}',
            'string.max': 'Country should have a maximum length of {#limit}',
            'any.required': 'Country is required',
        }),
        city: Joi.string().min(3).max(50).required().messages({
            'string.base': 'City should be a string',
            'string.empty': 'City cannot be empty',
            'string.min': 'City should have a minimum length of {#limit}',
            'string.max': 'City should have a maximum length of {#limit}',
            'any.required': 'City is required',
        }),
        terrainType: Joi.string().min(3).max(50).required().messages({
            'string.base': 'Terrain Type should be a string',
            'string.empty': 'Terrain Type cannot be empty',
            'string.min': 'Terrain Type should have a minimum length of {#limit}',
            'string.max': 'Terrain Type should have a maximum length of {#limit}',
            'any.required': 'Terrain Type is required',
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

// const validatePostTeam = (req, res, next) => {
//     const teamSchema = Joi.object({
//         name: Joi.string().min(4).max(50).
//     })

//     const { error } = teamSchema.validate(req.body)

//     if (error) {
//         return res.status(400).json({
//             msg: error.details[0].message,
//         })
//     }

//     next()
// }

const validatePostTeam = (type, next) => {
    return async (req, res) => {
        try {
            const teamSchema = Joi.object({
                name: Joi.string().min(2).max(100).required().messages({
                    'string.base': 'Name should be a string',
                    'string.empty': 'Name cannot be empty',
                    'string.min': 'Name must have a minimum length of {#limit}',
                    'string.max': 'Name must have a maximum length of {#limit}',
                    'any.required': 'Name is required'
                }),
                members: Joi.array()
                .items(Joi.string().required(), Joi.string().required())
                .min(2)
                .max(8)
                .required()
                .messages({
                    'string.base': 'Name should be a string',
                    'string.empty': 'Name cannot be empty',
                    'string.min': 'Name must have a minimum length of {#limit}',
                    'string.max': 'Name must have a maximum length of {#limit}',
                    'any.required': 'Name is required'
                }),
                eventName: Joi.string().min(2).max(100).required().messages({
                    'string.base': 'Name should be a string',
                    'string.empty': 'Name cannot be empty',
                    'string.min': 'Name must have a minimum length of {#limit}',
                    'string.max': 'Name must have a maximum length of {#limit}',
                    'any.required': 'Name is required'
                })
            })

            const { error, value } = resourceSchema.validate(data)

            if (error) {
                return res.status(400).json({
                    msg: error.details[0].message,
                })
            }

            next()

        } catch (err) {
            return res.status(500).json({
                msg: err.message,
            })
        }
    }
}


export {
    validatePostAnimal,
    validatePostParticipant,
    validatePostTeam,
    validatePostColosseum,
    validatePostEvent,
    validatePostAward
}
