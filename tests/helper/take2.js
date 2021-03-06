var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var board = require("../../src/helper/board.js");
var convert = require("../../src/helper/convert.js").convert;
var takeMove = require("../../src/helper/takeMove.js").takeMove;
var gen = require("../../src/game/gen.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var root = node.Node(true);
new_root = takeMove(node.Node(true,root.board),[97,76]);
new_root = takeMove(node.Node(false,new_root.board),[34,54]);

var target =
  "         \n" +
  "         \n" +
  " rnbqkbnr\n" +
  " pppppppp\n" +
  " ........\n" +
  " ........\n" +
  " ........\n" +
  " .....N..\n" +
  " PPPPPPPP\n" +
  " RNBQKB.R\n" +
  "         \n" +
  "         \n";

process.stdout.write("Take Move Test 2: ");
if (new_root.board != root.board){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
  console.log(new_root.board);
  console.log(root.board);
}
