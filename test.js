var nodeArgs = process.argv;
var songInput = "";
for (var i = 2; i < nodeArgs.length; i++) {
    songInput = songInput + "" + nodeArgs[i];
    spotify.search({ type: 'track', query: songInput, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(JSON.stringify(data, null, 2));
    });
}