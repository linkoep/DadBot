# Dad Bot

My attempt to make a twitter bot that replies to as many tweets as possible where the user tweets "I'm ____" with "Hi _____, I'm dad"

Using the excellent series of tutorials [here](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6atTSxoRiVnSuOn6JHnq2yV).

Partially inspired by, but not affiliated with [Discord Dad Bot](https://bots.discord.pw/bots/247852652019318795)

### Future Goals
- [ ] Make bot actually reply to user rather than tweeting at them
- [ ] Broaden Search to "I'm, i'm, Im, im"
- [ ] Refine search to exclude replies and retweets
- [ ] Run bot as stream (constantly replying rather than only when run locally

### Usage
##### If for some reason you want to host another copy of this bot
1. Clone/Download Repo
1. Install packages ([twit API](https://github.com/ttezel/twit))


        npm install
1. Get [authentication](https://apps.twitter.com/) and follow further instructions in empty_config.js
1. Run the bot 

        node index.js
   1. Hopefully this will soon start a stream externally rather than running the code once
