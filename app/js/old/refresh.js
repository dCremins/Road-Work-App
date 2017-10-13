function refresh(group) {
  var g1 = document.getElementById(group);
  var j = 1;
  var i;

  //for (i=0;i<g1.elements.length;i++){
  //  g1.elements[i].value='';
  //}

//Reset
  if(document.getElementById(group+'p1-'+j)) {
    while (j<=3) {
      var item = document.getElementById(group+'p1-'+j);
      item.parentNode.removeChild(item);
      var line = document.getElementById(group+'l1-'+j);
      var cap1 = document.getElementById(group+'c1-'+j);
      var cap2 = document.getElementById(group+'c2-'+j);
      var text = document.getElementById(group+'t1-'+j);
      line.parentNode.removeChild(line);
      cap1.parentNode.removeChild(cap1);
      cap2.parentNode.removeChild(cap2);
      text.parentNode.removeChild(text);
      j++;
    }
  }
  j = 1;
  if(document.getElementById(group+'a1-'+j)) {
    while (j<=5) {
      var itema = document.getElementById(group+'a1-'+j);
      itema.parentNode.removeChild(itema);
      j++;
    }
    var linea = document.getElementById(group+'tran-l');
    var cap1a = document.getElementById(group+'tran-1');
    var cap2a = document.getElementById(group+'tran-2');
    var texta = document.getElementById(group+'tran-t');
    linea.parentNode.removeChild(linea);
    cap1a.parentNode.removeChild(cap1a);
    cap2a.parentNode.removeChild(cap2a);
    texta.parentNode.removeChild(texta);
  }
  j = 1
  for (j=1; j<=3; j++) {
    if (document.getElementById(group+'_'+j)) {
      var hold = document.getElementById(group+'_'+j)
      hold.parentNode.removeChild(hold)
    }
    if (document.getElementById(group+'_linegroup_'+j)) {
      hold = document.getElementById(group+'_linegroup_'+j)
      hold.parentNode.removeChild(hold)
    }
  }
  if (document.getElementById(group+'_tapergroup')) {
    hold = document.getElementById(group+'_tapergroup')
    hold.parentNode.removeChild(hold)
  }
  if (document.getElementById(group+'_buffergroup')) {
    hold = document.getElementById(group+'_buffergroup')
    hold.parentNode.removeChild(hold)
  }
  if (document.getElementById(group+'_transitiongroup')) {
    hold = document.getElementById(group+'_transitiongroup')
    hold.parentNode.removeChild(hold)
  }
}

function refreshAll() {
  refresh('group1');
  refresh('group2');
  refresh('group3');
  refresh('group4');
  refresh('group5');
  refresh('group6');
}
