const httpStatus = require('http-status');
const { assignIn } = require('lodash');
const ExpResult = require('../models/result.model');
const { handler: errorHandler } = require('../middlewares/error');

/**
 * report exp or stage result
 */
exports.reportResult = async (req, res, next) => {
  const user = req.user;
  const userId = req.user._id;
  
  assignIn(req.body, { userId });
  const result = new ExpResult(req.body);
  const savedResult = await result.save();

  await user.update({
    nResults:  user.nResults + 1,
    lastExpReported: savedResult.exp
  }, { override: true, upsert: true });

  res.status(httpStatus.CREATED);
  res.json(savedResult);
};

/**
 * Get experiment list and general app data
 * @public
 */
exports.list = async (req, res, next) => res.json({ name: "experiment1", world: "restaurant", stage: 1 });