var mat = require("./mat");
var pst = require("./pst");
var rotate = require("../helper/rotate");

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

score.matBoth = function(node){
  var pts = score.mat(node);
  node.turn = !node.turn;
  node.board = rotate.rotate(node);
  pts += score.mat(node);
  return pts;
};

score.pos = function(node){
  var i = 0;
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

score.posBoth = function(node){
  var pts = score.pos(node);
  node.turn = !node.turn;
  node.board = rotate.rotate(node);
  pts += score.pos(node);
  return pts;
};

module.exports = score;
