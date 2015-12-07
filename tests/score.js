var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/node.js");

console.log("score.js test");

var root = node.Node();
var mat_score = score.mat(root);
console.log(mat_score);
