var fs = require("fs");
var exec = require('child_process').exec;

var tests = [
  "rotate.js",
  "mat.js"
];

tests.forEach(function(t){
  exec("node tests/"+t, function(error, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
          console.log('exec error: ' + error);
      }
  });
});
