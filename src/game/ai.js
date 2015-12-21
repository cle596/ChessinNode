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

ai.ab = function(n,depth,a,b,turn,branch){
  //fs.appendFileSync("ai.txt","visit\n");
  //visited += 1;
  //console.log("nodes visited: "+visited.toString());
  if (turn) {
    if (depth>0){
      var g = gen.gen(n);
      if (n.root){
        best_move = g[0];
        //fs.appendFileSync("ai.txt","GEN\r\n"+g.toString()+"\r\n");
      }
      g.forEach(function(y,x,arr){
        child = takeMove(node.Node(!turn,n.board,y),y);
        child.board = rotate.rotate(child);
        //fs.appendFileSync("../ai.txt",pretty.print(child));
        ret = ai.ab(child,depth-1,a,b,!turn,x);
        if (ret>a) {
          new_a = ret;
          if (new_a>=b){
            return b;
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
      //console.log(s);
      //fs.appendFileSync("ai.txt",s.toString()+"\r\n");
      return s;
    }
  }
  else {
    if (depth>0){
      var g = gen.gen(n);
      if (n.root){
        best_move = g[0]
      }
      g.forEach(function(y,x,arr){
        child = takeMove(node.Node(!turn,n.board,y),y);
        child.board = rotate.rotate(child);
        //fs.appendFileSync("../ai.txt",pretty.print(child));
        child.turn = !child.turn;
        ret = ai.ab(child,depth-1,a,b,!turn,x);
        if (ret<b) {
          new_b = ret;
          if (a>=new_b){
            return a;
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
      s=-1*score.score(n);
      //console.log(s);
      //fs.appendFileSync("ai.txt",s.toString()+"\r\n");
      return s;
    }
  }
};
/*
ai.search = function(n,f,d,turn){
  var g = f;
  var upper = 100000;
  var lower = -100000;
  var b;
  var ret;
  var move;
  while (lower<upper){
    if (g == lower){
      b = g+1;
    }
    else{
      b = g;
    }
    ret = ai.ab(n,d,b-1,b,turn);
    g = ret.value;
    console.log(g);
    move = ret.move;
    if (g<b){
      upper = g;
    }
    else {
      lower = g;
    }
  }
  return move;
}
*/
module.exports = ai;
