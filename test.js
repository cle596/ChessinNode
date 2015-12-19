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
  "pos/pos3.js",
  "gen/gen1.js",
  "gen/gen2.js",
  //"helper/input1.js",
  "helper/arrayeq1.js",
  "helper/order1.js",
  "helper/board1.js",
  "helper/conv1.js",
  "helper/reconv1.js",
  "helper/foconv1.js",
  "helper/take1.js",
  "helper/sort1.js",
  "match/match1.js",
  "match/match2.js",
  "match/match3.js",
  "ai/ai1.js"
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
