var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var gen = require("../../src/game/gen.js");
var input = require("../../src/game/input.js");
var convert = require("../../src/helper/convert.js").convert;
var takeMove = require("../../src/helper/takeMove.js").takeMove;
var ai = require("../../src/game/ai.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var bound = 100000;

var game = {};
game.run = function(){
  var root = node.Node(true);
  root.root = true;
  console.log(ai.search(root,1,-bound,bound,true));
}

game.run();
