var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
// var bleippos = [];

var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');

app.use(bodyParser.json());

app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));

console.log('***Express on Node ' + process.version + '***');

app.get('/', function (req, res) {
    res.send('The Bleippson Plan');
});


//I need some kind of login validation to enter the site at all from page /login


//POST /memory
app.post('/memories', function(req, res) {
    var body = _.pick(req.body, 'title', 'imageUrl', 'description', 'date', 'uploadedBy');

    db.memory.create(body).then(function(memory) {
        res.json(memory.toJSON());
    }, function(e) {
        res.status(400).json(e);
    });
});


//GET /memories?q=date							//can't test yet as Dates are POSTing
//(title, image, description, uploaded by?)
app.get('/memories', function(req, res) {
    var query = req.query;
    var where = {};

    if (query.hasOwnProperty('q') && query.q.length > 0) {
        where.date = {
            $like: '%' + query.q + '%'
        };
    }

    db.memory.findAll({where: where}).then(function (memories) {
        res.json(memories);
    }, function (e) {
        res.status(500).send();
    });
});



//GET memory/:id


//GET /memories?q=description OR month OR date


//PUT memory


//DELETE memory


//GET /bleippos
//name, image, description, skills, 


//GET /bleippos/:id


//POST /bleippo


//PUT /bleippo


//DELETE /bleippo







db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log('Express web server listening on port ' + PORT);
    });
});

// app.listen(PORT, function() {
// 	console.log('Express listening on port ' + PORT + '.');
// });