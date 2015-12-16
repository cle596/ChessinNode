var fs = require("fs");
var spawn = require('child_process').spawn;

var tests = [
  "rotate/rotate1.js",
  "rotate/rotate2.js",
  "rotate/rotate3.js",
  "rotate/rotate4.js",
  "mat/mat1.js",
  "mat/mat2.js",
  "mat/mat3.js",
  "mat/mat4.js",
  "pos/pos1.js",
  "pos/pos2.js",
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
