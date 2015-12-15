var score = require("../src/game/score.js");
var mat = require("../src/game/mat.js");
var pst = require("../src/game/pst.js");
var node = require("../src/game/_node.js");
var rotate = require("../src/helper/rotate.js");
var pretty = require("../src/helper/pretty.js");
var gen = require("../src/game/gen.js");
var arrayEqual = require("../src/helper/arrayEqual.js").arrayEqual;
var chalk = require("chalk");
var ctx = new chalk.constructor({
  enabled: true
});

var root = node.Node(true);
root.board =
  "         \n" +
  "         \n" +
  " rn.q..rk\n" +
  " pp...p.p\n" +
  " ..p....Q\n" +
  " ...p....\n" +
  " .......P\n" +
  " ..NP..R.\n" +
  " PPP...P.\n" +
  " ....RK..\n" +
  "         \n" +
  "         \n";
root.KR = false;
root.QR = false;
root.K = false;
root.kr = false;
root.qr = false;
root.k = false;

var target = [
  [48,37],[48,26],[48,38],[48,43],
  [48,47],[48,46],[48,45],[48,44],
  [48,58],[48,57],[48,66],[48,75],[48,84],[48,93],
  [68,58],[73,65],[73,54],
  [73,85],[73,94],[73,92],[73,61],[73,52],
  [74,64],[77,78],[77,67],[77,57],[77,47],[77,37],[77,27],
  [77,76],[77,75],[81,71],[81,61],[82,72],[82,62],
  [95,85],[95,75],[95,65],[95,55],[95,45],[95,35],[95,25],
  [95,94],[95,93],[95,92],[95,91],
  [96,86],[96,97],[96,85]
];

var moves = gen.gen(root);

process.stdout.write("Gen Test 2: ");
if (arrayEqual(moves,target)) {
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
} else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
  target.sort();
  moves.sort();
  for (var i=0;i<moves.length;++i){
    console.log(moves[i],target[i]);
  }
}
