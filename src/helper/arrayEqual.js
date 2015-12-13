var arrayEqual = function(a,b){
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  if (typeof(a)=="object"){
    a.sort();
    b.sort();
  }
  for (var i=0;i<a.length;++i){
    if (typeof(a)=="object"){
      if (!arrayEqual(a[i],b[i])){
        return false;
      }
    }
    else{
      if (a[i] != b[i]){
        return false;
      }
    }
  }
  return true;
}

module.exports.arrayEqual = arrayEqual;
