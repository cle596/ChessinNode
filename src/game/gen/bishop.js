var board = require("../../helper/board");

var vects = [-9, 11, 9, -11];

var bishop = function(pos, node) {
  var moves = [];
  var i = 1;
  vects.forEach(function(y, x, arr) {
    i = 1;
    while (true) {
      if (board.empty(node.board[pos + y * i])) {
        moves.push([pos, pos + y * i]);
        i += 1;
      } else if (board.enemy(node.board[pos + y * i])) {
        moves.push([pos, pos + y * i]);
        break;
      } else if (board.offgrid(node.board[pos + y * i])) {
        break;
      } else if (board.friend(node.board[pos + y * i])) {
        break;
      }
    }
  });
  return moves;
}

module.exports = bishop;
