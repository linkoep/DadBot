console.log('Starting bot');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//  search twitter for all tweets containing the word 'I'm'
var search_params = { 
	q: 'I\'m -filter:retweets filter:safe -filter:yeu :)',
	lang: 'en', 
	count: 10 
};

T.get('search/tweets', search_params, gotData);

function gotData(err, data, response) {
	for (var i = 0; i < data.statuses.length; i++) {
		if(true) {
			var tweet = data.statuses[i].text;
			console.log(tweet);
	 		if(tweet.search(/\bI\'m\b|\bi\'m\b/) != -1) {
				var output = tweet.slice(tweet.search(/\bI\'m\b|\bi\'m\b/) + 4, tweet.search(/\,|\.|\!|\?|$|htpps/));
				if (output !== "") {
					var to_post = "\n@" + data.statuses[i].user.screen_name + " Nice to meet you " + output + ", I\'m Dad!\n";
					console.log(to_post);
					
					 //tweet the result
					var post_params = { 
						status: to_post,
						in_reply_to_status_id: data.statuses[i].id_str
					};
					T.post('statuses/update', post_params, postedTweet);

					function postedTweet(err, data, response) {
					  if (err) {
					  	console.log(err);
					  }
					  console.log("Tweet posted");
					}
				}
			}
		}
	}
}

