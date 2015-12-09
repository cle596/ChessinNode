var mat = require("./mat");
var pst = require("./pst");

var pieces = [
  'P','N','B','R','Q','K'
];

var score = {};

score.mat = function(node){
  var score = 0;
  var b = node.board.split("");
  b.forEach(function(c){
    pieces.forEach(function(p){
      if (c == p){
        if (node.turn){
          score += mat[p];
        }
        else{
          score += -mat[p];
        }
      }
    })
  });
  return score;
};

score.pos = function(node){
  var score = 0;
  var b = node.board.split("");
  b.forEach(function(c,i){
    pieces.forEach(function(p){
      if (c == p){
        if (node.turn){
          score += pst[p][i];
        }
        else{
          score += -pst[p][i];
        }
      }
    })
  });
  return score;
};

module.exports = score;
