var mongoose = require('mongoose');


var Client = mongoose.Schema({

  name: String

});


module.exports = mongoose.model('Client', Client);

