var request = require('request');

exports.getPoppular = function (req, res) {
    var page = req.query.page;
    if(req.body.page!=undefined){
        page = req.body.page
    }
    let URI = 'https://api.themoviedb.org/3/movie/popular?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US&page=' + page;
    request.get(URI, function (error, response, body) {
        res.send(body);
    });
};

exports.getVideo = function (req, res) {
    var movie_id = req.query.movie_id;
    if(req.body.movie_id!=undefined){
        movie_id = req.body.movie_id
    }
    let URI = 'https://api.themoviedb.org/3/movie/' + movie_id + '/videos?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US';
    request.get(URI, function (error, response, body) {
        res.send(body);
    });
};

exports.getDetail = function (req, res) {
    var movie_id = req.query.movie_id;
    if(req.body.movie_id!=undefined){
        movie_id = req.body.movie_id
    }
    let URI = 'https://api.themoviedb.org/3/movie/' + movie_id + '?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US';
    request.get(URI, function (error, response, body) {
        res.send(body);
    });
};

exports.getReview = function (req, res) {
    var movie_id = req.query.movie_id;
    if(req.body.movie_id!=undefined){
        movie_id = req.body.movie_id
    }
    let URI = 'https://api.themoviedb.org/3/movie/' + movie_id + '/reviews?api_key=260cea00829ef56b79e1ed27c0113e3c&language=en-US&page=1';
    request.get(URI, function (error, response, body) {
        res.send(body);
    });
};

