const mongoose = require('mongoose');

/**
 * Result Schema
 * @private
 */
const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  exp: {
    type: String,
    maxlength: 128,
    //index: true,
    trim: true,
    lowercase: true,
  },
  world: {
    type: String,
    maxlength: 128,
    //index: true,
    trim: true,
    lowercase: true,
  },
  stage: {
    type: Number,
  },
  data: {
    type: Object,
    trim: true,
  },
}, {
  timestamps: true,
});


module.exports = mongoose.model('Result', resultSchema);