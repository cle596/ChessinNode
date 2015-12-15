var checkpass = function(node,move){
  if (node.board[move[0]] == "P"
    && move[0]>80
    && move[0]<89
    && move[0] == move[1]+20){
    node.pass = move[1];
  }
  return node;
}

var checkQueen = function(node,move){
  if (node.board[move[0]]=="P"
    && move[1]>20
    && move[1]<29){
      return true;
    }
  else {
    return false;
  }
}

var takeMove = function(node,move){
  node = checkpass(node,move);
  var b = node.board.split("");
  if (checkQueen(node,move)){
    b[move[1]] = 'Q';
  }
  else{
    var p = b[move[0]];
    b[move[1]] = p;
  }
  b[move[0]] = ".";
  return b.join("");
}

exports.takeMove = takeMove;
