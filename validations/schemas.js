const joi = require('@hapi/joi');

module.exports = {
  userValidation: {
    login: joi.object().keys({
      email: joi.string().email().required(),
      password: joi.string().min(4).required()
    }),
    register: joi.object().keys({
      email: joi.string().email().required(),
      firstname: joi.string().trim().alphanum(),
      lastname: joi.string().trim().alphanum(),
      password: joi.string().min(4).required(),
      passwordCheck: joi.any().valid(joi.ref('password')).required().options({language: {any: {allowOnly: 'must match password'}}}),
    })
  }
};