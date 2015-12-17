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
  ["d2d4", "g8f6"],
  ["c2c4", "d7d6"],
  ["b1c3", "e7e5"],
  ["e2e4", "e5d4"],
  ["d1d4", "b8c6"],
  ["d4d2", "g7g6"],
  ["b2b3", "f8g7"],
  ["c1b2", "e8g8"],
  ["f1d3", "f6g4"],
  ["g1e2", "d8h4"],
  ["e2g3", "g4e5"],
  ["e1g1", "f7f5"],
  ["f2f3", "g7h6"],
  ["d2d1", "f5f4"],
  ["g3e2", "g6g5"],
  ["c3d5", "g5g4"],
  ["g2g3", "f4g3"],
  ["h2g3", "h4h3"],
  ["f3f4", "c8e6"],
  ["d3c2", "f8f7"],
  ["g1f2", "h3h2"],
  ["f2e3", "e6d5"],
  ["d2d4", "g8f6"],
  ["c4d5", "c6b4"],
  ["f1h1", "f7f4"],
  ["h1h2", "f4f3"],
  ["e3d4", "h6g7"],
  ["a2a4", "c7c5"],
  ["d5c6", "b7c6"],
  ["c2d3", "e5d3"],
  ["d4c4", "d6d5"],
  ["e4d5", "c6d5"],
  ["c4b5", "a8b8"],
  ["b5a5", "b4c6"]
];

var target =
  "         \n" +
  "         \n" +
  " .r....k.\n" +
  " p.....bp\n" +
  " ..n.....\n" +
  " K..p....\n" +
  " P.....p.\n" +
  " .P.n.rP.\n" +
  " .B..N..R\n" +
  " R..Q....\n" +
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
  if (moves.indexOf(hist[z][1]) != -1) {
    root = takeMove(root, reconvert(hist[z][1]));
  }
  root.board = rotate.rotate(root);
  root.turn = !root.turn;
  //fs.appendFileSync("out.txt",root.board);
}


process.stdout.write("Match Test 2: ");
if (root.board == target) {
  process.stdout.write(ctx.green(String.fromCharCode(0x2714)) + "\n");
} else {
  process.stdout.write(ctx.red(String.fromCharCode(0x2717)) + "\n");
  console.log(root.board);
}
