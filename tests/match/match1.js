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
  ["e2e4", "d7d6"],
  ["d2d4", "g8f6"],
  ["b1c3", "g7g6"],
  ["c1e3", "f8g7"],
  ["d1d2", "c7c6"],
  ["f2f3", "b7b5"],
  ["g1e2", "b8d7"],
  ["e3h6", "g7h6"],
  ["d2h6", "c8b7"],
  ["a2a3", "e7e5"],
  ["e1c1", "d8e7"],
  ["c1b1", "a7a6"],
  ["e2c1", "e8c8"],
  ["c1b3", "e5d4"],
  ["d1d4", "c6c5"],
  ["d4d1", "d7b6"],
  ["g2g3", "c8b8"],
  ["b3a5", "b7a8"],
  ["f1h3", "d6d5"],
  ["h6f4", "b8a7"],
  ["h1e1", "d5d4"],
  ["c3d5", "b6d5"],
  ["e4d5", "e7d6"],
  ["d1d4", "c5d4"],
  ["e1e7", "a7b6"],
  ["f4d4", "b6a5"],
  ["b2b4", "a5a4"],
  ["d4c3", "d6d5"],
  ["e7a7", "a8b7"],
  ["a7b7", "d5c4"],
  ["c3f6", "a4a3"],
  ["f6a6", "a3b4"],
  ["c2c3", "b4c3"],
  ["a6a1", "c3d2"],
  ["a1b2", "d2d1"],
  ["h3f1", "d8d2"],
  ["b7d7", "d2d7"],
  ["f1c4", "b5c4"],
  ["b2h8", "d7d3"],
  ["h8a8", "c4c3"],
  ["a8a4", "d1e1"],
  ["f3f4", "f7f5"],
  ["b1c1", "d3d2"],
  ["a4a7", ""],
];

var target =
  "         \n" +
  "         \n" +
  " ........\n" +
  " Q......p\n" +
  " ......p.\n" +
  " .....p..\n" +
  " .....P..\n" +
  " ..p...P.\n" +
  " ...r...P\n" +
  " ..K.k...\n" +
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
  //fs.appendFileSync("out.txt",root.board);
  root.board = rotate.rotate(root);
  root.turn = !root.turn;
  var moves = gen.gen(root);
  moves.forEach(function(y, x, arr) {
    arr[x] = foconvert(reconvert(foconvert(y)));
  });
  if (hist[z][1]==""){
    root.board = rotate.rotate(root);
    root.turn = !root.turn;
    break;
  }
  if (moves.indexOf(hist[z][1]) != -1) {
    root = takeMove(root, reconvert(hist[z][1]));
  }
  root.board = rotate.rotate(root);
  root.turn = !root.turn;
  //fs.appendFileSync("out.txt",root.board);
}


process.stdout.write("Match Test 1: ");
if (root.board == target) {
  process.stdout.write(ctx.green(String.fromCharCode(0x2714)) + "\n");
} else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717)) + "\n");
  console.log(root.board);
}
