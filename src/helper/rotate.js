var rotate = {};

rotate.rotate = function(node){
  var b = node.board.replace(/\n/gi, "\nS").split("S");
  b.pop();
  b.forEach(function(y,x,arr){
    arr[x] = y.split("");
    arr[x].forEach(function(y2,x2,arr2){
      if (arr2[x2] == arr2[x2].toUpperCase()){
        arr2[x2] = arr2[x2].toLowerCase();
      }
      else if (arr2[x2] == arr2[x2].toLowerCase()){
        arr2[x2] = arr2[x2].toUpperCase();
      }
      if (arr2[x2] == "\n"){
        arr2[x2] = " ";
      }
      if (x2%10 == 0){
        arr2[x2] = "\n";
      }
    });
  });
  b.forEach(function(y,x,arr){
    arr[x] = y.reverse();
  });
  b = b.reverse();
  b.forEach(function(y,x,arr){
    arr[x] = y.join("");
  });
  b = b.join("");
  return b;
};

module.exports = rotate;
