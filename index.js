var app = require('express')();
var request = require('request');
const cors = require('cors');
const bodyParser = require("body-parser");
var port = process.env.PORT || 7777;

app.use(cors());
app.use(bodyParser.json());
/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

var routepage = require('./routes');

app.post('/getPoppular', routepage.getPoppular); // get Poppular
app.post('/getVideo', routepage.getVideo); // get Poppular
app.post('/getDetail', routepage.getDetail); // get Poppular
app.post('/getReview', routepage.getReview); // get Poppular



app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
