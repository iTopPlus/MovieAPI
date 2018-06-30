const functions = require("firebase-functions")
const express = require("express")
var request = require('request');
const cors = require('cors');
const bodyParser = require("body-parser");

var routepage = require('./routes');

/* Express */
const app = express()
app.use(cors());
app.use(bodyParser.json());

app.post('/getPoppular', routepage.getPoppular); // get Poppular
app.post('/getVideo', routepage.getVideo); // get Poppular
app.post('/getDetail', routepage.getDetail); // get Poppular
app.post('/getReview', routepage.getReview); // get Poppular

app.get('/getPoppular', routepage.getPoppular); // get Poppular
app.get('/getVideo', routepage.getVideo); // get Poppular
app.get('/getDetail', routepage.getDetail); // get Poppular
app.get('/getReview', routepage.getReview); // get Poppular

/* Routing */
app.get('*', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

const api_function = functions.https.onRequest(app)

module.exports = {
    api_function
}
