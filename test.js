var exec = require('child_process').exec;

exec('node tests/rotate.js', function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});

exec('node tests/score.js', function(error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});
