var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
//var mongo = require('mongodb');
var mongoose = require('mongoose');

var db, url = "mongodb+srv://sohanUser:sohan12345@cluster0-yjzcp.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(url,
  {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('error', function(err){
  console.log("Could not connect to MongoDB")
})