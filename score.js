var value = require("./value");

var pieces = [
  'P','N','B','R','Q','K',
  'p','n','b','r','q','k'
];

var pst = {
  'P':value.pawn,
  'N':value.knight,
  'B':value.bishop,
  'R':value.rook,
  'Q':value.queen,
  'K':value.king,
  'p':value.npawn,
  'n':value.nknight,
  'b':value.nbishop,
  'r':value.nrook,
  'q':value.nqueen,
  'k':value.nking
}

var score = {};

score.mat = function(node){
  var score = 0;
  node.board.forEach(function(c){
    pieces.forEach(function(p){
      if (c == p){
        score += value[p];
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
        score += pst[p][i];
      }
    })
  });
  return score;
};

module.exports = score;
