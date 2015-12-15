var orderEqual = function(a, b) {
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  if (typeof(a) == "object") {
    for (var i = 0; i < a.length; ++i) {
      if (!orderEqual(a[i], b[i])) {
        return false;
      }
    }
  } else {
    if (a != b) {
      return false;
    }
  }
  return true;
}

module.exports.orderEqual = orderEqual;
