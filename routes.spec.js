// var request = require('request');
var expect    = require("chai").expect;
var request = require('request');
var MovieAPI = require('./routes');
var moqGetPopular = require('./test/getPoppular.json');


describe("Movie API", function () {
    it("getPoppular should be same result with Moq",function(done){
        request.get = (URL, CB) => {
            CB(0,0,moqGetPopular);
        }

        var req = {
            query : {
                page : 1
            }
        }
        
        var res = {
            send : (result)=> {
                expect(result).to.equal(moqGetPopular);
                done();
            }
        }
        MovieAPI.getPoppular(req,res)
    })
});

// exports.getPoppular = function (req, res) {
//     let URI = 'https://api.themoviedb.org/3/movie/popular?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US&page=' + req.query.page;
//     request.get(URI, function (error, response, body) {
//         res.send(body);
//     });
// };

// exports.getVideo = function (req, res) {

//     let URI = 'https://api.themoviedb.org/3/movie/' + req.query.movie_id + '/videos?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US';
//     request.get(URI, function (error, response, body) {
//         res.send(body);
//     });
// };

// exports.getDetail = function (req, res) {

//     let URI = 'https://api.themoviedb.org/3/movie/' + req.query.movie_id + '?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US';
//     request.get(URI, function (error, response, body) {
//         res.send(body);
//     });
// };

// exports.getReview = function (req, res) {

//     console.log(req.query);
//     let URI = 'https://api.themoviedb.org/3/movie/' + req.query.movie_id + '/reviews?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US&page=1';
//     request.get(URI, function (error, response, body) {
//         res.send(body);
//     });
// };