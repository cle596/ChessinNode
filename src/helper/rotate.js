var rotate = {};

rotate.rotate = function(node){
  var b = node.board;
  b = b.replace(/\n/gi, "\nS");
  b = b.split("S");
  b.pop();
  b.forEach(function(y,x,arr){
    arr[x] = y.split("");
  });
  b.forEach(function(y,x,arr){
    arr[x] = y.reverse();
  });
  b = b.reverse();
  return b;
};

module.exports = rotate;
