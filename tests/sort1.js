var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/_node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");
var arrayEqual = require("../src/helper/arrayEqual.js").arrayEqual;
var orderEqual = require("../src/helper/orderEqual.js").orderEqual;
var board = require("../src/helper/board.js");
var convert = require("../src/helper/convert.js").convert;
var takeMove = require("../src/helper/takeMove.js").takeMove;
var scoreSort = require("../src/helper/scoreSort.js").scoreSort;
var gen = require("../src/game/gen.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var nodelist = [];
var target = [10,100,4,-100,3,20,-14];
var ordered = [-100,-14,3,4,10,20,100];
for (var i=0;i<7;++i){
  nodelist.push(node.Node(true));
  nodelist[i].score = target[i];
}
nodelist = scoreSort(nodelist);
var scorelist = [];
for (var i=0;i<7;++i){
  scorelist.push(nodelist[i].score);
}

process.stdout.write("Sort Test 1: ");
if (orderEqual(scorelist,ordered)){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
}
