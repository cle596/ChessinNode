var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/_node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target =
  "         \n" +
  "         \n" +
  " rnbkqb.r\n" +
  " pppppppp\n" +
  " .....n..\n" +
  " ........\n" +
  " ........\n" +
  " ........\n" +
  " PPPPPPPP\n" +
  " RNBKQBNR\n" +
  "         \n" +
  "         \n";

var root = node.Node(true);
root.board =
  "         \n" +
  "         \n" +
  " rnbqkbnr\n" +
  " pppppppp\n" +
  " ........\n" +
  " ........\n" +
  " ........\n" +
  " ..N.....\n" +
  " PPPPPPPP\n" +
  " R.BQKBNR\n" +
  "         \n" +
  "         \n";
root.board = rotate.rotate(root);

process.stdout.write("Rotate Test 2: ");
if (root.board == target){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714)));
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717)));
  console.log(target.length);
  console.log(root.board.length);
  console.log(target.localeCompare(root.board));
}
