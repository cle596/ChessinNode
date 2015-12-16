var sane = function(move){
  if (move.length != 4){
    return false;
  }
  if (move.charCodeAt(0)<96
    || move.charCodeAt(0)>105){
    return false;
  }
  if (move.charCodeAt(1)<49
    || move.charCodeAt(1)>56){
    return false;
  }
  if (move.charCodeAt(2)<96
    || move.charCodeAt(2)>105){
    return false;
  }
  if (move.charCodeAt(3)<49
    || move.charCodeAt(3)>56){
    return false;
  }
  return true;
}

var conv = function(mov){
  var pos = 0;
  var rpos = 0;
  pos = mov.charCodeAt(0)-96;
  rpos += 9-pos;
  //pos = 10-parseInt(move[1]);//(10-parseInt(mov[1]))*10;
  rpos += (parseInt(mov[1])+1)*10;
  return rpos;
}

var reconvert = function(move){
  if (sane(move)){
    var arr = [];
    arr.push(conv(move.slice(0,2)));
    arr.push(conv(move.slice(2,4)));
    return arr;
  }
  else {
    return "wrong input";
  }
}

exports.reconvert = reconvert;
