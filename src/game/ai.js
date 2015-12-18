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
  if (turn){
    if (depth == 0){
      return score.score(n);
    }
    var g = gen.gen(n);
    g.forEach(function(y,x,arr){
      child = takeMove(n,y);
      child.turn = !child.turn;
      v = Math.max(
        a,
        ai.search(
          child,
          depth-1,
          a,
          b,
          !turn
        )
      );
      if (v>a){
        a = v;
      }
      if (v>=b){
        return a;
      }
    });
    return v;
  }
  else{
    if (depth == 0){
      return -score.score(n);
    }
    var g = gen.gen(n);
    g.forEach(function(y,x,arr){
      child = takeMove(n,y);
      child.turn = !child.turn;
      v = Math.min(
        b,
        ai.search(
          child,
          depth-1,
          a,
          b,
          !turn
        )
      );
      if (v<b){
        b = v;
      }
      if (v<=a){
        return b;
      }
    });
    return v;
  }

};

module.exports = ai;
