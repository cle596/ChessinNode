var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node.js");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var convert = require("../../src/helper/convert.js").convert;
var reconvert = require("../../src/helper/reconvert.js").reconvert;
var foconvert = require("../../src/helper/foconvert.js").foconvert;
var takeMove = require("../../src/helper/takeMove.js").takeMove;
var gen = require("../../src/game/gen.js");
var chalk = require("chalk");
var fs = require("fs");
var ctx = new chalk.constructor({
  enabled: true
});

var hist = [
  ["g1f3", "g8f6"],
  ["c2c4", "g7g6"],
  ["b1c3", "f8g7"],
  ["d2d4", "e8g8"],
  ["c1f4", "d7d5"],
  ["d1b3", "d5c4"],
  ["b3c4", "c7c6"],
  ["e2e4", "b8d7"],
  ["a1d1", "d7b6"],
  ["c4c5", "c8g4"],
  ["f4g5", "b6a4"],
  ["c5a3", "a4c3"],
  ["b2c3", "f6e4"],
  ["g5e7", "d8b6"],
  ["f1c4", "e4c3"],
  ["e7c5", "f8e8"],
  ["e1f1", "g4e6"],
  ["c5b6", "e6c4"],
  ["f1g1", "c3e2"],
  ["g1f1", "e2d4"],
  ["f1g1", "d4e2"],
  ["g1f1", "e2c3"],
  ["f1g1", "a7b6"],
  ["a3b4", "a8a4"],
  ["b4b6", "c3d1"],
  ["h2h3", "a4a2"],
  ["g1h2", "d1f2"],
  ["h1e1", "e8e1"],
  ["b6d8", "g7f8"],
  ["f3e1", "c4d5"],
  ["e1f3", "f2e4"],
  ["d8b8", "b7b5"],
  ["h3h4", "h7h5"],
  ["f3e5", "g8g7"],
  ["h2g1", "f8c5"],
  ["g1f1", "e4g3"],
  ["f1e1", "c5b4"],
  ["e1d1", "d5b3"],
  ["d1c1", "g3e2"],
  ["c1b1", "e2c3"],
  ["b1c1", "a2c2"]
];

var target =
  "         \n" +
  "         \n" +
  " .Q......\n" +
  " .....pk.\n" +
  " ..p...p.\n" +
  " .p..N..p\n" +
  " .b.....P\n" +
  " .bn.....\n" +
  " ..r...P.\n" +
  " ..K.....\n" +
  "         \n" +
  "         \n";

var root = node.Node(true);
for (var z=0;z<hist.length;++z){
  var moves = gen.gen(root);
  moves.forEach(function(y, x, arr) {
    arr[x] = foconvert(y);
  });
  if (moves.indexOf(hist[z][0]) != -1) {
    root = takeMove(root, convert(hist[z][0]));
  }
  fs.appendFileSync("out.txt",root.board);
  root.board = rotate.rotate(root);
  root.turn = !root.turn;
  var moves = gen.gen(root);
  moves.forEach(function(y, x, arr) {
    arr[x] = foconvert(reconvert(foconvert(y)));
  });
  if (moves.indexOf(hist[z][1]) != -1) {
    root = takeMove(root, reconvert(hist[z][1]));
  }
  root.board = rotate.rotate(root);
  root.turn = !root.turn;
  fs.appendFileSync("out.txt",root.board);
}


process.stdout.write("Match Test 3: ");
if (root.board == target) {
  process.stdout.write(ctx.green(String.fromCharCode(0x2714)) + "\n");
} else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717)) + "\n");
  console.log(root.board);
}
