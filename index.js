console.log('Starting bot');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

DadTweet();
setInterval(DadTweet, 37*1000);

function DadTweet() {
	// search twitter for tweets containing the word 'I'm'
	//Filters out retweets, unsafe content, 
	//focuses on what twitter deems as "positive"
	var search_params = { 
		q: 'I\'m -filter:retweets filter:safe -filter:yeu -filter:@mentions :)',
		lang: 'en', 
		count: 10 
	};

	T.get('search/tweets', search_params, gotData);

	//Handles search results
	function gotData(err, data, response) {
		//Iterate through results (will break after first tweet is posted)
		for (var i = 0; i < data.statuses.length; i++) {
			//Additional search refinment can be done here
			if(true) {
				var tweet = data.statuses[i].text;
				//console.log(tweet); //Print for debugging
		 		if(tweet.search(/\bI\'m\b|\bi\'m\b/) != -1) {
					//Find relevant portion of tweet
					var output = tweet.slice(tweet.search(/\bI\'m\b|\bi\'m\b/) + 4, tweet.search(/\,|\.|\!|\?|$|htpps|…|\:/));
					if (output !== "") {
						var to_post = "\n@" + data.statuses[i].user.screen_name + " Nice to meet you " + output + ", I\'m Dad!\n";
						//console.log(to_post); //print for debugging
						
						//tweet the result
						var post_params = { 
							status: to_post,
							in_reply_to_status_id: data.statuses[i].id_str
						};
						T.post('statuses/update', post_params, postedTweet);

						//What to do after tweeting
						function postedTweet(err, data, response) {
						  if (err) {
						  	if (err.code == 187) {
						  		console.log("Attempted to tweet duplicated");
						  	} else if (err.code == 261) {
						  		console.log("Twitter blocked aplication write access");
						  		exit(1);
						  	} else {
						  		console.log(err);
						  	}
						  } else {
						  	console.log("Tweet posted");
						  }
						}
						break;
					}
				}
			}
		}
	}
}


