console.log('Starting bot');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config)