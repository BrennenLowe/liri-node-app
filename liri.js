// // Twitter
if (process.argv[2] == "my-tweets") {
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '33m898HcIPl17eG07HcXJT4tc',
  consumer_secret: 'LCmv3q51rOLMoi54TPVsJkehH2B1rli7pMWUSXP1kSLKUMG4EC',
  access_token_key: '932447792533872640-AKhPPcOxlbVGk5RWVnhSlP3ax8V3tS0',
  access_token_secret: 'j6HCWrIRp7AxVCGfwF3ekPIab6qX6D3P5JqiEosUhRpVC'
});

var params = {screen_name: 'CodingPractice1'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
 if (!error) {
   console.log(tweets[0].text);
   console.log(tweets[0].created_at);
 }
});
}

// Spotify
if (process.argv[2] == "spotify-this-song") {
var Spotify = require('node-spotify-api');
var songTitle = process.argv[3];

var spotify = new Spotify({
  id: "43443cb663344aeb9c1e6c4ebb30b464",
  secret: "1a4f8d5e4dda42e6a92c1d58e1448bf9"
});

spotify
  .search({
    type: 'track',
    query: songTitle
  })
  .then(function (response) {
    console.log("Artist: " + response.tracks.items[0].album.artists[0].name);
    console.log("Song Title: " + response.tracks.items[0].name);
    console.log("Album: " + response.tracks.items[0].album.name);
    console.log("Spotify Preview Link: " + response.tracks.items[0].album.artists[0].external_urls.spotify);
  })
  .catch(function (err) {
    console.log(err);
  });
}
