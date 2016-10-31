var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

title: String,
description: String,
image: String,
updated: { type: Date, default: Date.now }

});

module.exports = mongoose.model('article', schema); 
