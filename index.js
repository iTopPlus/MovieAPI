var app = require('express')();
var request = require('request');

var port = process.env.PORT || 7777;

/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

var routepage = require('./routes');

app.get('/getPoppular', routepage.getPoppular); // get Poppular
app.get('/getVideo', routepage.getVideo); // get Poppular
app.get('/getDetail', routepage.getDetail); // get Poppular
app.get('/getReview', routepage.getReview); // get Poppular



app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
