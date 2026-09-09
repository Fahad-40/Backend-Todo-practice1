let Joi = require("joi");

let taskValidationSchema = Joi.object({

taskName: Joi.string().required(),
TaskUsername: Joi.string(),
completed: Joi.string()

})

module.exports = taskValidationSchema;