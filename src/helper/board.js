var board = {};

board.empty = function(c){
  if (c=="."
    && c != " "
    && c != "\n"){
    return true;
  }
  else {
    return false;
  }
};

board.enemy = function(c){
  if (c==c.toLowerCase()
    && c != "."
    && c != " "
    && c != "\n"){
    return true;
  }
  else{
    return false;
  }
}

module.exports = board;
