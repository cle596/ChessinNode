var node = require("./src/game/node");
var pretty = require("./src/helper/pretty");

var express = require("express");
var app = express();
app.listen(8000);

app.get("/",function(req,res){
  res.send("welcome to chessAPI");
});

app.get("/game",function(req,res){
  var root = node.Node();
  res.send(pretty.print(root));
});

app.use(function(req, res, next){
  res.status(404).send("Bad request. Refer to API docs.");
});

app.use(function(err, req, res, next) {
  res.status(500).send('Error. Refer to API docs.');
});
