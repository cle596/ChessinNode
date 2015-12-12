var board = {};

board.empty = function(c){
  if (c==" "){
    return true;
  }
  else {
    return false;
  }
};

board.enemy = function(c){
  if (c==c.toLowerCase()){
    return true;
  }
  else{
    return false;
  }
}

module.exports = board;
