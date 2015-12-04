var mat = require("./mat");
var pst = require("./pst");

var pieces = [
  'P','N','B','R','Q','K'
];

var score = {};

score.mat = function(node){
  var score = 0;
  node.board.forEach(function(c){
    pieces.forEach(function(p){
      if (c == p){
        score += mat[p];
      }
    })
  });
  return score;
};

score.pos = function(node){
  var score = 0;
  node.board.forEach(function(c,i){
    pieces.forEach(function(p){
      if (c == p){
        score += pst[p];
      }
    })
  });
  return score;
};

module.exports = score;
