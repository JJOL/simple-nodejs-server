var express = require('express');

var app = express();
var port = env.port || 8080;
app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send("Hello World We Are Working!!!!");
});


app.listen(app.get('port'), function() {
  console.log('Listening on port: ', port);
});
