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

ai.search = function(n,depth,a,b,turn,branch){
  var best_move = "none?";
  if (turn){
    if (depth == 0){
      s = score.score(n);
      fs.appendFileSync("ai.txt",
        "score: "+s.toString()+" depth: "+depth+" branch: "+branch.toString()+"\n"
      );
      return s;
    }
    var g = gen.gen(n);
    var v;
    g.forEach(function(y,x,arr){
      child = takeMove(n,y);
      child.turn = !child.turn;
      if (n.root){
        child.root = false;
      }
      child.board = rotate.rotate(child);
      v = ai.search(child,depth-1,a,b,!turn,x);
      if (v>a){
        a = v;
        fs.appendFileSync("ai.txt",
          "new alpha: "+a.toString()+" depth: "+depth+" branch: "+x.toString()+"\n"
        );
        if (n.root){
          best_move = y;
          fs.appendFileSync("ai.txt",
            "new best_move: "+best_move.toString()+" depth: "+depth+" branch: "+x.toString()+"\n"
          );
        }
      }
      if (v>=b){
        fs.appendFileSync("ai.txt",
          "out of bounds white: "+v+" depth: "+depth+" branch: "+x.toString()+"\n"
        );
        return a;
      }
    });
    if (n.root){
      return best_move;
    }
    return v;
  }
  else{
    if (depth == 0){
      s = score.score(n);
      fs.appendFileSync("ai.txt",
        "score: "+s.toString()+" depth: "+depth+" branch: "+branch.toString()+"\n"
      );
      return s;
    }
    var g = gen.gen(n);
    var v;
    g.forEach(function(y,x,arr){
      child = takeMove(n,y);
      child.turn = !child.turn;
      if (n.root){
        child.root = false;
      }
      child.board = rotate.rotate(child);
      v = ai.search(child,depth-1,a,b,!turn,x);
      if (v<b){
        b = v;
        fs.appendFileSync("ai.txt",
          "new beta: "+b.toString()+" depth: "+depth+" branch: "+x.toString()+"\n"
        );
      }
      if (v<=a){
        fs.appendFileSync("ai.txt",
          "out of bounds black: "+v+" depth: "+depth+" branch: "+x.toString()+"\n"
        );
        return b;
      }
    });
    return v;
  }

};

module.exports = ai;
