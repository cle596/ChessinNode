var pretty = {};

pretty.print = function(node) {
  var pretty = node.board.split("");
  pretty.forEach(function(y, x, arr) {
    arr[x] += " ";
  });
  pretty = pretty.join("");
  return pretty;
}

module.exports = pretty;
