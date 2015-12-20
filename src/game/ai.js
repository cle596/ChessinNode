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
  //fs.appendFileSync("ai.txt","visit\n");
  //visited += 1;
  //console.log("nodes visited: "+visited.toString());
  if (turn) {
    if (depth>0){
      var g = gen.gen(n);
      if (g.length<5){
        fs.appendFileSync("ai.txt","GEN\r\n"+g.toString()+"\r\n");
      }
      if (n.root){
        best_move = g[0];
        //fs.appendFileSync("ai.txt","GEN\r\n"+g.toString()+"\r\n");
      }
      g.forEach(function(y,x,arr){
        child = takeMove(node.Node(!turn,n.board,y),y);
        child.board = rotate.rotate(child);
        //fs.appendFileSync("../ai.txt",pretty.print(child));
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
      s=score.score(n);
      //console.log(s);
      //fs.appendFileSync("ai.txt",s.toString()+"\r\n");
      return s;
    }
  }
  else {
    if (depth>0){
      var g = gen.gen(n);
      if (g.length<5){
        fs.appendFileSync("ai.txt","GEN\r\n"+g.toString()+"\r\n");
      }
      if (n.root){
        best_move = g[0]
      }
      g.forEach(function(y,x,arr){
        child = takeMove(node.Node(!turn,n.board,y),y);
        child.board = rotate.rotate(child);
        //fs.appendFileSync("../ai.txt",pretty.print(child));
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
      s=-score.score(n);
      //console.log(s);
      //fs.appendFileSync("ai.txt",s.toString()+"\r\n");
      return s;
    }
  }
};

module.exports = ai;
