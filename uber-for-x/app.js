var http=require("http");
var express=require('express');
var consolidate=require('consolidate');
var _=require('underscore');
var bodyParser=require('body-parser');

var routes=require('./routes');
var mongoClient=require('mongodb').MongoClient;

var app=express();
app.use(bodyParser.urlencoded({
	extended:true,
}));

app.use(bodyParser.json({limit:'5mb'}));

app.set('views','index.html');