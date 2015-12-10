var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target = 0;

var root = node.Node(true);
var pts = score.posBoth(root);

process.stdout.write("Pos Score Test 1: ");
if (pts == target){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714)));
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717)));
  console.log(pts);
}
