var node = {};
node.Node = function(turn) {
  var node = {
    board:
      (" ".repeat(9)+"\n").repeat(2)+
      " rnbqkbnr\n" +
      " pppppppp\n" +
      (" ".repeat(9)+"\n").repeat(4)+
      " PPPPPPPP\n" +
      " RNBQKBNR\n" +
      (" ".repeat(9)+"\n").repeat(2),
    turn: turn
  };
  return node;
}

module.exports = node;
