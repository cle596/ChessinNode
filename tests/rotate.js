var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");

console.log("rotate test");
var root = node.Node();
root.board = rotate.rotate(root);
console.log(root.board.split(""));
console.log(pretty.print(root));
