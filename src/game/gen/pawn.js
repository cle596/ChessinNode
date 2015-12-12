var vects = [-10,-20,-11,-9];

var pawn = function (pos,node){
  var moves = [];
  vects.forEach(function(y,x,arr){
    if (x==0){
      if (node.board[pos+y] == " "){
        moves.push([pos,pos+y]);
      }
    }
    else if (x==1){
      if (node.board[pos+y] == " "
      && node.board[pos+arr[x-1]] == " "){
        moves.push([pos,pos+y]);
      }
    }
    else if (x>1){
      if (node.board[pos+y] == node.board[pos+y].toLowerCase()){
        moves.push([pos,pos+y]);
      }
    }
  });
  return moves;
}

module.exports = pawn;
