var Compliment = require('./../shared/compliment');

var bodyParser  = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/../client'));
app.use('/client', express.static(__dirname + '/../client'));
app.use('/shared', express.static(__dirname + '/../shared'));
app.use('/lib', express.static(__dirname + '/../lib'));

app.listen(app.get('port'), function() {
  console.log('MineCafe running on port ' + app.get('port'));
  console.log('  -' + Compliment());
});
