var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");

process.stdout.write("rotate test: ");
var target =
  (" ".repeat(9)+"\n").repeat(2)+
  " rnbkqbnr\n" +
  " pppppppp\n" +
  (" ".repeat(9)+"\n").repeat(4)+
  " PPPPPPPP\n" +
  " RNBKQBNR\n" +
  (" ".repeat(9)+"\n").repeat(2);
var root = node.Node();
root.board = rotate.rotate(root);
if (root.board == target){
  process.stdout.write(String.fromCharCode(0x2714)+"\n");
}
else {
  process.stdout.write(String.fromCharCode(0x2717)+"\n");
}
