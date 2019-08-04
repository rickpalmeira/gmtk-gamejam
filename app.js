var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  var rank = [
    {player: 'AAA', score: 8001},
    {player: 'BBB', score: 750},
    {player: 'CCC', score: 500}
  ];

  res.send(JSON.stringify(rank));
});
var port = process.env.PORT || 80;
app.listen(80, function() {
  console.log('Server started on port ' + port + '.');
});