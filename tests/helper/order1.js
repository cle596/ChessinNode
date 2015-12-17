var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var orderEqual = require("../../src/helper/orderEqual.js").orderEqual;
var gen = require("../../src/game/gen.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var target = [
  [ 81, 71 ],
  [ 81, 61 ],
  [ 82, 72 ],
  [ 82, 62 ],
  [ 83, 73 ],
  [ 83, 63 ],
  [ 84, 74 ],
  [ 84, 64 ],
  [ 85, 75 ],
  [ 85, 65 ],
  [ 86, 76 ],
  [ 86, 66 ],
  [ 87, 77 ],
  [ 87, 67 ],
  [ 88, 78 ],
  [ 88, 68 ],
  [ 92, 73 ],
  [ 92, 71 ],
  [ 97, 78 ],
  [ 97, 76 ]
];

var arr = [
  [ 84, 64 ],
  [ 85, 75 ],
  [ 85, 65 ],
  [ 86, 76 ],
  [ 81, 71 ],
  [ 81, 61 ],
  [ 82, 72 ],
  [ 82, 62 ],
  [ 83, 73 ],
  [ 83, 63 ],
  [ 84, 74 ],
  [ 86, 66 ],
  [ 87, 77 ],
  [ 87, 67 ],
  [ 88, 78 ],
  [ 88, 68 ],
  [ 92, 73 ],
  [ 92, 71 ],
  [ 97, 78 ],
  [ 97, 76 ]
];

process.stdout.write("Order Equal Test 1: ");
if (!orderEqual(arr,target)){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
}
