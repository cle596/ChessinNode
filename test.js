var fs = require("fs");
var exec = require('child_process').exec;

var tests = [
  "rotate1.js",
  "mat1.js",
  "mat2.js",
  "pos1.js"
];

var i = 0;
var run = function(){
  exec("node tests/" + tests[i], function(error, stdout, stderr) {
    process.stdout.write(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    i += 1;
    if (i<tests.length){
      run();
    }
  });
}
run();
