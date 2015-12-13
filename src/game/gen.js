var pawn = require("./gen/pawn");
var knight = require("./gen/knight");
var bishop = require("./gen/bishop");

var gen = {};

gen.gen = function(node){
  var moves = [];
  var b = node.board.split("");
  b.forEach(function(y,x,arr){
    if (y == "P"){
      Array.prototype.push.apply(moves,pawn(x,node));
    }
    else if (y == "N"){
      Array.prototype.push.apply(moves,knight(x,node));
    }
    else if (y == "B"){
      Array.prototype.push.apply(moves,bishop(x,node));
    }
  });
  return moves;
};

module.exports = gen;
