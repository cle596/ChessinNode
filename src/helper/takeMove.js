var takeMove = function(node,move){
  var p = node.board[move[0]];
  node.board[move[1]] = p;
  node.board[move[0]] = ".";
  return node.board;
}

exports.takeMove = takeMove;
