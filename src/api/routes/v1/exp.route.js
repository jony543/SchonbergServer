const express = require('express');
const validate = require('express-validation');
const controller = require('../../controllers/exp.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');
const {
  reportResult
} = require('../../validations/exp.validation');

const router = express.Router();

router
  .route('/')
  /**
   * entry point to the application
   */
  .get(authorize(), controller.list)
  /**
   * report result of stage or exp
   */
  .post(authorize(), controller.reportResult); // optional - add validation validate(reportResult),

module.exports = router;