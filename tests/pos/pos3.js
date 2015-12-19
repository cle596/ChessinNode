var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var chalk = require("chalk");
var ctx = new chalk.constructor({enabled: true});

var root = node.Node(true);
root.board =
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
var pts = score.posBoth(root);

var t = [
  15,20,0,
  0,5,
  5,10,
  20,-10,
  -5,0,
  0,
  0,-20,-20,
  -5,
  0
];

var target = 0;

t.forEach(function(y){
  target += y;
});

process.stdout.write("Pos Score Test 3: ");
if (pts == target){
  process.stdout.write(ctx.green(String.fromCharCode(0x2714))+"\n");
}
else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717))+"\n");
  console.log(pts);
}
