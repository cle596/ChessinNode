var fs = require("fs");
var spawn = require('child_process').spawn;

var tests = [
  "rotate1.js",
  "rotate2.js",
  "rotate3.js",
  "rotate4.js",
  "mat1.js",
  "mat2.js",
  "pos1.js",
  "pos2.js",
  "gen1.js",
  "gen2.js",
  //"input1.js",
  "arrayeq1.js",
  "order1.js",
  "board1.js",
  "conv1.js",
  "take1.js",
  "sort1.js"
];

var i = 0;
function run(){
  return spawn("node", ["tests/" + tests[i]], {
    stdio: [process.stdin, process.stdout, process.stderr]
  })
  .on('close', function(code) {
    i += 1;
    if (i < tests.length) {
      run();
    }
  });
}

run();
