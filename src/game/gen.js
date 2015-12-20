var pawn = require("./gen/pawn");
var knight = require("./gen/knight");
var bishop = require("./gen/bishop");
var rook = require("./gen/rook");
var queen = require("./gen/queen");
var king = require("./gen/king");

var gen = {};

gen.gen = function(node){
  var moves = [];
  var b = node.board.split("");
  b.forEach(function(y,x,arr){
    if (y == "R"){
      Array.prototype.push.apply(moves,rook(x,node));
    }
    else if (y == "N"){
      Array.prototype.push.apply(moves,knight(x,node));
    }
    else if (y == "B"){
      Array.prototype.push.apply(moves,bishop(x,node));
    }
    else if (y == "P"){
      Array.prototype.push.apply(moves,pawn(x,node));
    }
    else if (y == "Q"){
      Array.prototype.push.apply(moves,queen(x,node));
    }
    else if (y == "K"){
      Array.prototype.push.apply(moves,king(x,node));
    }
  });
  return moves;
};

module.exports = gen;
