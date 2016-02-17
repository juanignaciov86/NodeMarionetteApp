var express = require('express');
var app = express();
var path    = require("path");

app.use('/bower_components',  express.static(__dirname + '../../../bower_components'));
app.use('/js',  express.static(__dirname + '../../js'));

app.get('/', function (req, res) {
  // res.send(path.join(__dirname+'../../../bower_components'));
  res.sendFile(path.join(__dirname+'/../index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
