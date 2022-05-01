const mongoose = require('mongoose');

const CreditSchema = new mongoose.Schema({
  name: String,
  credits: Number,
  classId: String
});

module.exports = mongoose.model('Credit', CreditSchema);