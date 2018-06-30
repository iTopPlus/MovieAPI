// var request = require('request');
var expect    = require("chai").expect;
var request = require('request');
var MovieAPI = require('./routes');
var moqGetPopular = require('./test_moq/getPoppular.json');
var moqGetVideo = require('./test_moq/getVideo.json');
var moqgetDetail = require('./test_moq/getPoppular.json');
var moqgetReview = require('./test_moq/getReview.json'); 


describe("Movie API getPopPular", function () {
    request.get = (URL, CB) => {
        CB(0,0,moqGetPopular);
    }

    var req = {
        body : {
            page : 1
        }
    }
    it("should be same moq",function(done){
        var res = {
            send : (result)=> {
                expect(result).to.equal(moqGetPopular);
                done();
            }
        }
        MovieAPI.getPoppular(req,res)
    })
    it("should not null",function(done){
        var res = {
            send : (result)=> {
                expect(result).not.equal(null);
                done();
            }
        }
        MovieAPI.getPoppular(req,res)
    })
});
describe("Movie API getVideo", function () {
    request.get = (URL, CB) => {
        CB(0,0,moqGetPopular);
    }

    var req = {
        body : {
            movie_id : 222
        }
    }
    it("should be same moq",function(done){
        var res = {
            send : (result)=> {
                expect(result).to.equal(moqGetPopular);
                done();
            }
        }
        MovieAPI.getVideo(req,res)
    })
    it("should not null",function(done){
        var res = {
            send : (result)=> {
                expect(result).not.equal(null);
                done();
            }
        }
        MovieAPI.getVideo(req,res)
    })
});
describe("Movie API getDetail", function () {
    request.get = (URL, CB) => {
        CB(0,0,moqGetPopular);
    }

    var req = {
        body : {
            movie_id : 1
        }
    }
    it("should be same moq",function(done){
        var res = {
            send : (result)=> {
                expect(result).to.equal(moqGetPopular);
                done();
            }
        }
        MovieAPI.getDetail(req,res)
    })
    it("should not null",function(done){
        var res = {
            send : (result)=> {
                expect(result).not.equal(null);
                done();
            }
        }
        MovieAPI.getDetail(req,res)
    })
});
describe("Movie API getReview", function () {
    request.get = (URL, CB) => {
        CB(0,0,moqGetPopular);
    }

    var req = {
        body : {
            movie_id : 1
        }
    }
    it("should be same moq",function(done){
        var res = {
            send : (result)=> {
                expect(result).to.equal(moqGetPopular);
                done();
            }
        }
        MovieAPI.getReview(req,res)
    })
    it("should not null",function(done){
        var res = {
            send : (result)=> {
                expect(result).not.equal(null);
                done();
            }
        }
        MovieAPI.getReview(req,res)
    })
});