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
var readlineSync = require('readline-sync');
var ctx = new chalk.constructor({enabled: true});

var ai = {};
visited = 0;

var step = function(msg){
  var move = readlineSync.question(msg+'step? ');
  if (move == ""){
    return true;
  }
  else{
    return false;
  }
}

var format = function(d,a,b,turn){
  return "depth: "+d.toString()+" "
    + "alpha: "+a.toString()+" "
    + "beta: "+b.toString()+" "
    + "turn: "+turn.toString()+" ";
}

ai.ab = function(n,depth,a,b,turn,branch){
  if (turn) {
    if (depth>0){
      if (step("GEN: "+format(depth,a,b,turn))){
        var g = gen.gen(n);
      }
      if (n.root){
        best_move = g[0];
      }
      g.forEach(function(y,x,arr){
        child = takeMove(node.Node(!turn,n.board,y),y);
        child.board = rotate.rotate(child);
        ret = ai.ab(child,depth-1,a,b,!turn,x);
        if (ret>a) {
          new_a = ret;
          if (new_a>=b){
            if (step("CUTOFF: "+format(depth,a,b,turn))){
              return b;
            }
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
        return {
          value: a,
          move: best_move
        };
      }
      else{
        return a;
      }
    }
    else {
      s=score.score(n);
      return s;
    }
  }
  else {
    if (depth>0){
      if (step("GEN: "+format(depth,a,b,turn))){
        var g = gen.gen(n);
      }
      if (n.root){
        best_move = g[0]
      }
      g.forEach(function(y,x,arr){
        child = takeMove(node.Node(!turn,n.board,y),y);
        child.board = rotate.rotate(child);
        child.turn = !child.turn;
        ret = ai.ab(child,depth-1,a,b,!turn,x);
        if (ret<b) {
          new_b = ret;
          if (a>=new_b){
            if (step("CUTOFF: "+format(depth,a,b,turn))){
              return a;
            }
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
        return {
          value: b,
          move: best_move
        };
      }
      else{
        return b;
      }
    }
    else {
      s=-score.score(n);
      return s;
    }
  }
};

module.exports = ai;
