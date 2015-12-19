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
var fs = require("fs");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var ai = {};
visited = 0;

ai.search = function(n,depth,a,b,turn,branch){
  //visited += 1;
  //console.log("nodes visited: "+visited.toString());
  if (turn) {
    if (depth>0){
      var g = gen.gen(n);
      if (n.root){
        best_move = g[0]
      }
      g.forEach(function(y,x,arr){
        child = takeMove(n,y);
        child.turn = !child.turn;
        ret = ai.search(child,depth-1,a,b,!turn,x);
        if (ret>a) {
          new_a = ret;
          if (new_a>=b){
            return a;
          }
          else{
            a = new_a;
            if (n.root){
              best_move = y;
            }
          }
        }
      });
      if (n.root){
        return best_move;
      }
      else{
        return a;
      }
    }
    else {
      return score.score(n);
    }
  }
  else {
    if (depth>0){
      var g = gen.gen(n);
      if (n.root){
        best_move = g[0]
      }
      g.forEach(function(y,x,arr){
        child = takeMove(n,y);
        child.turn = !child.turn;
        ret = ai.search(child,depth-1,a,b,!turn,x);
        if (ret<b) {
          new_b = ret;
          if (a>=new_b){
            return b;
          }
          else{
            b = new_b;
            if (n.root){
              best_move = y;
            }
          }
        }
      });
      if (n.root){
        return best_move;
      }
      else{
        return b;
      }
    }
    else {
      return score.score(n);
    }
  }
};

module.exports = ai;
