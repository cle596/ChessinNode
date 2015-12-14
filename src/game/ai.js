var score = require("./score.js");
var mat = require("./mat.js");
var pst = require("./pst.js");
var node = require("./_node");
var rotate = require("../helper/rotate.js");
var pretty = require("../helper/pretty.js");
var arrayEqual = require("../helper/arrayEqual.js").arrayEqual;
var gen = require("./gen.js");
var input = require("./input.js");
var convert = require("../helper/convert.js").convert;
var takeMove = require("../helper/takeMove.js").takeMove;
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var ai = {};

ai.search = function(n,depth,a,b,turn){
  var moves = gen.gen(n);
  for (var i=0;i<moves.length;++i){
    node.Node(!turn,takeMove(n,moves[i]));
  }
  nodes.scoreSort();
  for (var i=0;i<moves.length;++i){

  }
};

module.exports = ai;
