var readlineSync = require('readline-sync');

var input = {};

input.prompt = function(){
  var move = readlineSync.question('your move: ');
  console.log(move);
  return move;
}

module.exports = input;
