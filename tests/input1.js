var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/_node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");
var arrayEqual = require("../src/helper/arrayEqual.js").arrayEqual;
var gen = require("../src/game/gen.js");
var input = require("../src/game/input.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target = "e2e4";
console.log("Input Test 1: (Type e2e4)");
var move = input.prompt();
if (move == target){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
}
