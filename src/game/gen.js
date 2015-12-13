var pawn = require("./gen/pawn");

var gen = {};

gen.gen = function(node){
  var moves = [];
  var b = node.board.split("");
  b.forEach(function(y,x,arr){
    if (y == "P"){
      Array.prototype.push.apply(moves,pawn(x,node));
    }
  });
  return moves;
};

module.exports = gen;
