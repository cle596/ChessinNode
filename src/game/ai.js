var score = require("./score.js");
var mat = require("./mat.js");
var pst = require("./pst.js");
var node = require("./_node");
var rotate = require("../helper/rotate.js");
var pretty = require("../helper/pretty.js");
var arrayEqual = require("../helper/arrayEqual.js").arrayEqual;
var gen = require("./gen.js");
var input = require("./input.js");
var convert = require("../helper/convert.js").convert;
var takeMove = require("../helper/takeMove.js").takeMove;
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var ai = {};

var max = 4;

ai.search = function(root,depth,a,b,turn){
  var moves = gen.gen(root);
  var nodes = [];
  for (var i=0;i<moves.length;++i){
    nodes.push(node.Node(!turn,takeMove(root,moves[i])));
  }
  nodes = scoreSort(nodes);
  for (var i=0;i<nodes.length;++i){
    if (depth<3){
      ai.search(nodes[i],depth-1,a,b,!turn);
    }
    else{
      root.score = score.score(root);
      if (turn){
        if (root.score>a){
          a = root.score;
          return a;
        }
        else if (root.score<=b){
          break;
        }
      }
      else{
        if (score.score(node)<b){
          b = score.score(node);
          return b;
        }
        else if (root.score>=a){
          break;
        }
      }

    }
  }
};

module.exports = ai;
