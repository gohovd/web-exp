// set variables for environment
var express = require('express');
var app = express();

/**
Respond to HTTP get with some arbitrary file

dirname includes all folders up until the file (excl file)
basename can be used for strict file name (excl prior path)
**/
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
