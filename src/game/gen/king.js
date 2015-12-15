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
    if (node.QR && node.K && node.board.slice(82,85) == "..."){
      moves.push([85,81]);
    }
    if (node.KR && node.K && node.board.slice(86,88) == ".."){
      moves.push([85,88])
    }
  }
  else{
    if (node.qr && node.k && node.board.slice(85,88) == "..."){
      moves.push([84,88]);
    }
    if (node.kr && node.k && node.board.slice(82,84) == ".."){
      moves.push([84,81])
    }
  }
  return moves;
}

module.exports = king;
