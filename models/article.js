var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

title: {type:String, default: ''},
description: {type:String, default: ''},
image: {type:String, default: ''},
updated: { type: Date, default: Date.now }

});

module.exports = mongoose.model('article', schema);
