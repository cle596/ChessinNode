var rotate = {};

rotate.rotate = function(node){
  var b = node.board;
  b = b.replace(/\n/gi, "\nS");
  b = b.split("S");
  b.pop();
  b.forEach(function(y,x,arr){
    arr[x] = y.split("");
  });
  return b;
};

module.exports = rotate;
