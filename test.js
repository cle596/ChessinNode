var fs = require("fs");
var exec = require('child_process').exec;

var tests = [
  "rotate.js",
  "mat.js",
  "pos.js"
];

tests.forEach(function(t){
  exec("node tests/"+t, function(error, stdout, stderr) {
      process.stdout.write(stdout);
      console.log(stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
  });
});
console.log();
