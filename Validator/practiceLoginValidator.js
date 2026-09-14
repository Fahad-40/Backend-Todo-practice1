let Joi = require("joi");

let logInSchema = Joi.object({
email: Joi.string().required(),
password: Joi.string().required()
.min(8)
.max(64)
.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])'))
.required

})

module.exports = logInSchema