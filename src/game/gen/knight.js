var board = require("../../helper/board");

var vects = [
  -19, -8,
  12, 21,
  19, 8,
  -12, -21
];

var knight = function (pos,node){
  var moves = [];
  vects.forEach(function(y,x,arr){
    if (board.empty(node.board[pos+y])
      || board.enemy(node.board[pos+y])){
      moves.push([pos,pos+y]);
    }
  });
  return moves;
}

module.exports = knight;
