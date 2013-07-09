var fs = require('fs');
var buf=require('buf')
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var textstream = fs.createReadStream('index.html', {start: 0, end: 99});
	buf = new Buffer(textstream)
	var text = buf.toString(buf)
	response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
