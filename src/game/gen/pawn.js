var board = require("../../helper/board");

var vects = [-10,-20,-11,-9];
var init = [81,82,83,84,85,86,87,88];

var pawn = function (pos,node){
  var moves = [];
  vects.forEach(function(y,x,arr){
    if (x==0){
      if (board.empty(node.board[pos+y])){
        moves.push([pos,pos+y]);
      }
    }
    else if (x==1){
      if (board.empty(node.board[pos+y])
      && board.empty(node.board[pos+arr[0]])
      && init.indexOf(pos) != -1){
        moves.push([pos,pos+y]);
      }
    }
    else if (x>1){
      if (board.enemy(node.board[pos+y])){
        moves.push([pos,pos+y]);
      }
      else if (board.enemy(node.board[pos+y+10])
        && node.pass == pos+y+10){
        moves.push([pos,pos+y]);
      }
    }
  });
  return moves;
}

module.exports = pawn;
