var checkpass = function(node,move){
  if (node.board[move[0]] == "P"
    && move[0]>80
    && move[0]<89
    && move[0] == move[1]+20){
    node.pass = (9-move[1]%10)+(11-Math.floor(move[1]/10))*10;
  }
  else{
    node.pass = 0;
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

var checkCas = function(node,move){
  if (node.turn){
    if (move[0] == 91){
      node.QR = false;
    }
    if (move[0] == 95){
      node.K = false;
    }
    if (move[0] == 98){
      node.KR = false;
    }
  }
  else{
    if (move[0] == 91){
      node.kr = false;
    }
    if (move[0] == 94){
      node.k = false;
    }
    if (move[0] == 98){
      node.qr = false;
    }
  }
  return node;
}

var registerCas = function(node,move){
  var b = node.board.split("");
  if (node.turn){
    if (move[0] == 95 && move[1] == 97){
      b[98] = ".";
      b[96] = "R";
    }
    if (move[0] == 95 && move[1] == 93){
      b[91] = ".";
      b[94] = "R";
    }
  }
  else{
    if (move[0] == 94 && move[1] == 92){
      b[91] = ".";
      b[93] = "R";
    }
    if (move[0] == 94 && move[1] == 96){
      b[98] = ".";
      b[95] = "R";
    }
  }
  node.board = b.join("");
  return node;
}

var registerPass = function(node,move){
  var b = node.board.split("");
  if (b[move[0]] == 'P'
    && (move[1] == move[0]-9 || move[1] == move[0]-11)
    && b[move[1]] == "."){
    b[move[1]+10] = ".";
  }
  node.board = b.join("");
  return node;
}

var takeMove = function(node,move){
  node = checkCas(node,move);
  node = checkpass(node,move);
  node = registerPass(node,move);
  var b = node.board.split("");
  if (checkQueen(node,move)){
    b[move[1]] = 'Q';
  }
  else{
    var p = b[move[0]];
    b[move[1]] = p;
  }
  b[move[0]] = ".";
  node.board = b.join("");
  node = registerCas(node,move);
  return node;
}

exports.takeMove = takeMove;
