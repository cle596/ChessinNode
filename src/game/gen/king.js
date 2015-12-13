var board = require("../../helper/board");

var vects = [-10, 1, 10, -1];

var king = function(pos, node) {
  var moves = [];
  vects.forEach(function(y, x, arr) {
    if (board.empty(node.board[pos + y])) {
      moves.push([pos, pos + y]);
    } else if (board.enemy(node.board[pos + y])) {
      moves.push([pos, pos + y]);
    }
  });
  return moves;
}

module.exports = king;
