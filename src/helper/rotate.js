var rotate = {};

rotate.rotate = function(node){
  var b = node.board.split("\n");
  b.forEach(function(y,x,arr){
    arr[x] = y.split("");
  });
  return b;
};

module.exports = rotate;
