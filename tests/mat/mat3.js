var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target = 220;

var root = node.Node(true);
root.board =
  "         \n" +
  "         \n" +
  " r.b..qk.\n" +
  " pp..p..p\n" +
  " ...p..pb\n" +
  " ..pPn..P\n" +
  " ..P.N...\n" +
  " .....r.P\n" +
  " PPQ..B..\n" +
  " R...KBNR\n" +
  "         \n" +
  "         \n";
var pts = score.matBoth(root);

process.stdout.write("Mat Score Test 3: ");
if (pts == target){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
  console.log(pts);
}
