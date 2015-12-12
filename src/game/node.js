var node = {};
node.Node = function(turn) {
  var node = {
    board:
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
      "         \n",
    turn: turn
  };
  return node;
}

module.exports = node;
