var fs = require("fs");
var spawn = require('child_process').spawn;

var tests = [
  "rotate1.js",
  "rotate2.js",
  "mat1.js",
  "mat2.js",
  "pos1.js",
  "pos2.js",
  "gen1.js",
  "gen2.js",
  "input1.js"
];

var i = 0;
var run = function() {
  var child = spawn("node", ["tests/"+tests[i]] , {
      stdio: [process.stdin, process.stdout, 'pipe']
    });
  child.on('close', function (code) {
    i += 1;
    if (i < tests.length) {
      run();
    }
  });
}
run();
