var board = require("../../helper/board");

var vects = [-10,-9,1,11,10,9,-1,-11];

var king = function(pos, node) {
  var moves = [];
  vects.forEach(function(y, x, arr) {
    if (board.empty(node.board[pos + y])) {
      moves.push([pos, pos + y]);
    } else if (board.enemy(node.board[pos + y])) {
      moves.push([pos, pos + y]);
    }
  });
  if (node.turn){
    if (node.QR && node.K && node.board.slice(92,95) == "..."){
      moves.push([95,93]);
    }
    if (node.KR && node.K && node.board.slice(96,98) == ".."){
      moves.push([95,97])
    }
  }
  else{
    if (node.qr && node.k && node.board.slice(95,98) == "..."){
      moves.push([94,96]);
    }
    if (node.kr && node.k && node.board.slice(92,94) == ".."){
      moves.push([94,92])
    }
  }
  return moves;
}

module.exports = king;
