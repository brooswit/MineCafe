/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:51:10
*/
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

app.listen(app.get('port'), function() {
  console.log('MineCafe running on port ' + app.get('port'));
  console.log('  -' + Compliment());
});
