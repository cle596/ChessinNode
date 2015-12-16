var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target =
  "         \n" +
  "         \n" +
  " .r..r...\n" +
  " .....k..\n" +
  " ....NPR.\n" +
  " .p.pp...\n" +
  " p.......\n" +
  " ....P..P\n" +
  " P.q..P..\n" +
  " K.....Q.\n" +
  "         \n" +
  "         \n";

var root = node.Node(true);
root.board =
  "         \n" +
  "         \n" +
  " .q.....k\n" +
  " ..p..Q.p\n" +
  " p..p....\n" +
  " .......P\n" +
  " ...PP.P.\n" +
  " .rpn....\n" +
  " ..K.....\n" +
  " ...R..R.\n" +
  "         \n" +
  "         \n";
root.board = rotate.rotate(root);

process.stdout.write("Rotate Test 4: ");
if (root.board == target){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
  console.log(root.board);
}
