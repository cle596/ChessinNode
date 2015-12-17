var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var board = require("../../src/helper/board.js");
var gen = require("../../src/game/gen.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var root = node.Node(true);

process.stdout.write("Board Test 1: ");
if (board.empty(".")
  && board.enemy("q")
  && board.friend("K")
  && board.offgrid(" ")){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
}
