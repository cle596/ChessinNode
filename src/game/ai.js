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

var max = 4;

ai.search = function(n,depth,a,b,turn){
  if (turn){
    if (depth == 0){
      return score.score(n);
    }
    var g = gen.gen(node);
    g.forEach(function(y,x,arr){
      a = Math.max(a,ai.search(node.Node(n,take_move(n,y))));
      if (b<=a){
        return b;
      }
    });
    return a;
  }
  else{
    if (depth == 0){
      return -score.score(n);
    }
    var g = gen.gen(node);
    g.forEach(function(y,x,arr){
      b = Math.min(b,ai.search(node.Node(n,take_move(n,y))));
      if (b<=a){
        return a;
      }
    });
    return b;
  }

};

module.exports = ai;
