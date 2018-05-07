let mongoose = require('mongoose');

let CashFlow = mongoose.Schema({
  type: {type: Number},
  value: {type: Number},
  description: {type: String},
  creationDate: {type: Date, default: new Date()}
});

module.exports = mongoose.model('CashFlow', CashFlow);

