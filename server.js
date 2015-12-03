var node = require("./node");
var helper = require("./helper");

var express = require("express");
var app = express();
app.listen(8000);

app.get("/",function(req,res){
  res.send("welcome to chessAPI");
});

app.get("/game",function(req,res){
  var root = node();
  res.send(helper.pprint(root));
});
