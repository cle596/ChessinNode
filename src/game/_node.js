var node = {};
node.Node = function(turn, board) {
  var node = {
    turn: turn,
    score: 0
  };
  if (typeof(board) === null) {
    node.board =
      "         \n" +
      "         \n" +
      " rnbqkbnr\n" +
      " pppppppp\n" +
      " ........\n" +
      " ........\n" +
      " ........\n" +
      " ........\n" +
      " PPPPPPPP\n" +
      " RNBQKBNR\n" +
      "         \n" +
      "         \n";
  } else {
    node.board = board;
  }
  return node;
}

module.exports = node;
