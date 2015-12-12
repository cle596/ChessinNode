var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target =
  (" ".repeat(9)+"\n").repeat(2)+
  " rnbkqb.r\n" +
  " pppppppp\n" +
  " .....n..\n" +
  (" "+".".repeat(8)+"\n").repeat(3)+
  " PPPPPPPP\n" +
  " RNBKQBNR\n" +
  (" ".repeat(9)+"\n").repeat(2);

var root = node.Node(true);
root.board =
  (" ".repeat(9)+"\n").repeat(2) +
  " rnbqkbnr"+"\n" +
  " pppppppp"+"\n" +
  " ........\n" +
  (" "+".".repeat(8)+"\n").repeat(2) +
  " ..N.....\n" +
  " PPPPPPPP"+"\n" +
  " R.BQKBNR"+"\n" +
  (" ".repeat(9)+"\n").repeat(2);
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
