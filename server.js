var express = require('express');

var app = express();
var env = {};
var port = env.port || 8080;

app.get('/', function(req, res) {
  res.send("Hello World We Are Working!!!!");
});


app.listen(port, function() {
  console.log('Listening on port: ', port);
});
