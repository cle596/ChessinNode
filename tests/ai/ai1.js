var score = require("../../src/game/score.js");
var mat = require("../../src/game/mat.js");
var pst = require("../../src/game/pst.js");
var node = require("../../src/game/_node");
var rotate = require("../../src/helper/rotate.js");
var pretty = require("../../src/helper/pretty.js");
var arrayEqual = require("../../src/helper/arrayEqual.js").arrayEqual;
var gen = require("../../src/game/gen.js");
var input = require("../../src/game/input.js");
var convert = require("../../src/helper/convert.js").convert;
var takeMove = require("../../src/helper/takeMove.js").takeMove;
var ai = require("../../src/game/ai.js");
var chalk = require("chalk");
var fs = require("fs");
var ctx = new chalk.constructor({enabled: true});

var bound = 100000;

var game = {};
game.run = function(){
  var root = node.Node(true);
  root.root = true;
  var i=0;
  while (i<4){
    if (root.turn){
      var move = ai.search(root,3,-bound,bound,true);
      root = takeMove(node.Node(true,root.board,move),move);
      root.root = true;
      console.log(pretty.print(root));
      fs.appendFileSync("ai.txt",pretty.print(root));
      root.board = rotate.rotate(root);
      root.turn = !root.turn;
      i+=1;
    }
    else {
      var move = ai.search(root,3,-bound,bound,false);
      console.log(move);
      root = takeMove(node.Node(false,root.board,move),move);
      root.root = true;
      root.board = rotate.rotate(root);
      root.turn = !root.turn;
      console.log(pretty.print(root));
      fs.appendFileSync("ai.txt",pretty.print(root));
      i+=1;
    }
  }
}

fs.writeFileSync("ai.txt","");
game.run();
