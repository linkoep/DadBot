console.log('Starting bot');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//  search twitter for all tweets containing the word 'I'm'
var search_params = { 
	q: 'I\'m', 
	count: 2 
};

T.get('search/tweets', search_params, gotData);

function gotData(err, data, response) {
 	var tweets = data.statuses;
 	for (var i = 0; i < tweets.length; i++) {
 		console.log(tweets[i].text);
 	}
}

//  tweet 'hello world!'
var post_params = { status: 'hello world!' };

T.post('statuses/update', post_params, postedTweet);

function postedTweet(err, data, response) {
  if (err) {
  	console.log(err);
  }
  console.log("Tweet posted");
}