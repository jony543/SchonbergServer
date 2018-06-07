const Joi = require('joi');
const User = require('../models/user.model');

module.exports = {

  // GET /v1/exp
  listExperiments: {
    query: {      
    },
  },

  // POST /v1/exp
  reportResult: {
    body: {
      exp: Joi.string(),
      world: Joi.string().required(),
      stage: Joi.number().min(1).max(3),
      data: Joi.object()
    },
  }
};