var takeMove = function(node,move){
  var b = node.board.split("");
  var p = b[move[0]];
  b[move[1]] = p;
  b[move[0]] = ".";
  return b.join("");
}

exports.takeMove = takeMove;
