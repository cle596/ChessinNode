var swap = function(pair){
  var save = pair[0];
  pair[0] = pair[1];
  pair[1] = save;
  return pair;
}

var scoreSort = function(list){
  var times = 0;
  var save = [];
  while(times<list.length-1){
    for (var i=0;i<list.length-1;++i){
      if(list[i].score>list[i+1].score){
        save = swap([list[i],list[i+1]]);
        list[i]=save[0];
        list[i+1]=save[1];
      }
    }
    times+=1;
  }
  return list;
}

exports.scoreSort = scoreSort;
