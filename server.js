var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// var bleippos = [];

var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');

app.use(bodyParser.json());

// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

console.log('***Express on Node ' + process.version + '***');

app.get('/', function (req, res) {
    res.send('The Bleippson Plan');
});







db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log('Express web server listening on port ' + PORT);
    });
});

// app.listen(PORT, function() {
// 	console.log('Express listening on port ' + PORT + '.');
// });