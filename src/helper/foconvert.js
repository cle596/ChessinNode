var conv = function(mov){
  var str = "";
  str += String.fromCharCode(mov%10+96);
  str += 10-Math.floor(mov/10);
  return str;
}

var foconvert = function(move){
  return conv(move[0])+conv(move[1]);
}

exports.foconvert = foconvert;
