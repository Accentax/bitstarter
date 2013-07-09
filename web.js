var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    buf =new Buffer(255);
    var text =fs.readFileSync('index.html',{encoding:'utf8'});
    response.send(buf.toString(text));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

