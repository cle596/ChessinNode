var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var gen = require("../../src/game/gen.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var chalk = require("chalk");
var ctx = new chalk.constructor({
  enabled: true
});

var root = node.Node(false);
root.board = rotate.rotate(root);
var g = gen.gen(root);

process.stdout.write("Gen Test 3: ");
if (g.length>0) {
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
  //console.log(g);
} else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
  console.log(g);
}
