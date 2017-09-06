function move(group, color) {
  //var form = document.getElementById(group)
  var svg = "http://www.w3.org/2000/svg"
  var accidentStart = 375
  var accidentEnd = 500
  var labelHeight = 185;
  var verticalTaper = ((143-85)/3)
  var i = 1
  var j = 1
  let g, h, c1, c2, l, la
  /*
  var x1=5
  var x2=25
  var value = Number(form.elements[0].value)
  var space = (value/8)
*/
//Labels Height

//Reset
  if(document.getElementById(group+'p1-'+j)) {
    while (j<=3) {
      var item = document.getElementById(group+'p1-'+j);
      item.parentNode.removeChild(item)
      var line = document.getElementById(group+'l1-'+j);
      var cap1 = document.getElementById(group+'c1-'+j);
      var cap2 = document.getElementById(group+'c2-'+j);
      var text = document.getElementById(group+'t1-'+j);
      line.parentNode.removeChild(line)
      cap1.parentNode.removeChild(cap1)
      cap2.parentNode.removeChild(cap2)
      text.parentNode.removeChild(text)
      j++
    }
  }
  j = 1
  if(document.getElementById(group+'a1-'+j)) {
    while (j<=5) {
      var itema = document.getElementById(group+'a1-'+j);
      itema.parentNode.removeChild(itema)
      j++
    }
    var linea = document.getElementById(group+'tran-l');
    var cap1a = document.getElementById(group+'tran-1');
    var cap2a = document.getElementById(group+'tran-2');
    var texta = document.getElementById(group+'tran-t');
    linea.parentNode.removeChild(linea)
    cap1a.parentNode.removeChild(cap1a)
    cap2a.parentNode.removeChild(cap2a)
    texta.parentNode.removeChild(texta)
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

  /*
    Work backwards to do correct spacing.
    D:  Downstream Taper
    C:  Buffer
    B:  Transition Taper
    A3: Sign Three
    A2: Sign Two
    A1: Sign One
  */

/********************************************/
// Downstream Taper
/********************************************/

var taper = Number(document.getElementById(group+'_downstream').value)/3
var taperTransition = ((taper-20)/3)
var tx2 = accidentEnd+taper
var tx1 = tx2-5
var ty1 = 147
var ty2 = 142
i=0

g = document.createElementNS(svg, "g")
g.setAttributeNS(null, "id", group+'_tapergroup');
document.getElementById("Layer_1").appendChild(g)
g = null

while (i<=3) {
  h = document.createElementNS(svg, "polygon")
  h.setAttributeNS(null, "class", "st2 "+color);
  h.setAttributeNS(null, "opacity", "0.75 ");
  h.setAttributeNS(null, "points", tx1+","+ty2+" "+tx2+","+ty2+" "+tx2+","+ty1+" "+tx1+","+ty1);
  document.getElementById(group+'_tapergroup').appendChild(h)
  h = null
  i+=1;
  if (i > 3) {
    break;
  }
  tx2 = tx1-taperTransition;
  tx1 = tx2-5;
  ty1-=verticalTaper;
  ty2-=verticalTaper;
}
c1 = document.createElementNS(svg, "line")
  c1.setAttributeNS(null, "x1", tx1);
  c1.setAttributeNS(null, "y1", (labelHeight-5));
  c1.setAttributeNS(null, "x2", tx1);
  c1.setAttributeNS(null, "y2", (labelHeight+5));
  c1.setAttributeNS(null, "class", color);
  document.getElementById(group+'_tapergroup').appendChild(c1)
l = document.createElementNS(svg, "line")
  l.setAttributeNS(null, "x1", tx1);
  l.setAttributeNS(null, "y1", labelHeight);
  l.setAttributeNS(null, "x2", accidentEnd+taper);
  l.setAttributeNS(null, "y2", labelHeight);
  l.setAttributeNS(null, "class", color);
  document.getElementById(group+'_tapergroup').appendChild(l)
c2 = document.createElementNS(svg, "line")
  c2.setAttributeNS(null, "x1", accidentEnd+taper);
  c2.setAttributeNS(null, "y1", (labelHeight-5));
  c2.setAttributeNS(null, "x2", accidentEnd+taper);
  c2.setAttributeNS(null, "y2", (labelHeight+5));
  c2.setAttributeNS(null, "class", color);
  document.getElementById(group+'_tapergroup').appendChild(c2)
la = document.createElementNS(svg, "text")
  la.setAttributeNS(null, "id", group+'t1-'+(i));
  la.setAttributeNS(null, "y", (labelHeight+15));
  la.setAttributeNS(null, "text-anchor", "middle");
  la.setAttributeNS(null, "x", ((tx1)+(((accidentEnd+taper)-tx1)/2)));
  la.setAttributeNS(null, "class", color);
  latextNode = document.createTextNode(document.getElementById(group+'_downstream').value);
    la.appendChild(latextNode);
  document.getElementById(group+'_tapergroup').appendChild(la)


/********************************************/
// Buffer
/********************************************/

var buffer = Number(document.getElementById(group+'_buffer').value)/3
var bufferTransition = ((buffer+50)/8)
var bx2 = tx1-bufferTransition
var bx1 = bx2-5
var by1 = ty1
var by2 = ty2
i=0

g = document.createElementNS(svg, "g")
g.setAttributeNS(null, "id", group+'_buffergroup');
document.getElementById("Layer_1").appendChild(g)
g = null

while (i<=6) {
  let h = document.createElementNS(svg, "polygon")
  h.setAttributeNS(null, "class", "st2 "+color);
  h.setAttributeNS(null, "opacity", "0.75 ");
  h.setAttributeNS(null, "points", bx1+","+by2+" "+bx2+","+by2+" "+bx2+","+by1+" "+bx1+","+by1);
  document.getElementById(group+'_buffergroup').appendChild(h)
  h = null
  i+=1;
  if (i > 6) {
    break;
  }
  bx2 = bx1-bufferTransition;
  bx1 = bx2-5;
}
c1 = document.createElementNS(svg, "line")
  c1.setAttributeNS(null, "x1", bx1-bufferTransition);
  c1.setAttributeNS(null, "y1", (labelHeight-5));
  c1.setAttributeNS(null, "x2", bx1-bufferTransition);
  c1.setAttributeNS(null, "y2", (labelHeight+5));
  c1.setAttributeNS(null, "class", color);
  document.getElementById(group+'_buffergroup').appendChild(c1)
l = document.createElementNS(svg, "line")
  l.setAttributeNS(null, "x1", bx1-bufferTransition);
  l.setAttributeNS(null, "y1", labelHeight);
  l.setAttributeNS(null, "x2", tx1);
  l.setAttributeNS(null, "y2", labelHeight);
  l.setAttributeNS(null, "class", color);
  document.getElementById(group+'_buffergroup').appendChild(l)
c2 = document.createElementNS(svg, "line")
  c2.setAttributeNS(null, "x1", tx1);
  c2.setAttributeNS(null, "y1", (labelHeight-5));
  c2.setAttributeNS(null, "x2", tx1);
  c2.setAttributeNS(null, "y2", (labelHeight+5));
  c2.setAttributeNS(null, "class", color);
  document.getElementById(group+'_buffergroup').appendChild(c2)
la = document.createElementNS(svg, "text")
  la.setAttributeNS(null, "id", group+'t1-'+(i));
  la.setAttributeNS(null, "y", (labelHeight+15));
  la.setAttributeNS(null, "text-anchor", "middle");
  la.setAttributeNS(null, "x", ((bx1-bufferTransition)+((tx1-(bx1-bufferTransition))/2)));
  la.setAttributeNS(null, "class", color);
  latextNode = document.createTextNode(document.getElementById(group+'_buffer').value);
    la.appendChild(latextNode);
  document.getElementById(group+'_buffergroup').appendChild(la)


/********************************************/
// Transition Taper
/********************************************/

var transition = Number(document.getElementById(group+'_transition').value)/3
var tTransition = ((transition-20)/3)
var rx2 = bx1-bufferTransition
var rx1 = rx2-5
var ry1 = by1
var ry2 = by2
i=0

g = document.createElementNS(svg, "g")
g.setAttributeNS(null, "id", group+'_transitiongroup');
document.getElementById("Layer_1").appendChild(g)
g = null

while (i<=3) {
  let h = document.createElementNS(svg, "polygon")
  h.setAttributeNS(null, "class", "st2 "+color);
  h.setAttributeNS(null, "opacity", "0.75 ");
  h.setAttributeNS(null, "points", rx1+","+ry2+" "+rx2+","+ry2+" "+rx2+","+ry1+" "+rx1+","+ry1);
  document.getElementById(group+'_transitiongroup').appendChild(h)
  h = null
  i+=1;
  if (i > 3) {
    break;
  }
  rx2 = rx1-tTransition;
  rx1 = rx2-5;
  ry1+=verticalTaper;
  ry2+=verticalTaper;
}
c1 = document.createElementNS(svg, "line")
  c1.setAttributeNS(null, "x1", rx1);
  c1.setAttributeNS(null, "y1", (labelHeight-5));
  c1.setAttributeNS(null, "x2", rx1);
  c1.setAttributeNS(null, "y2", (labelHeight+5));
  c1.setAttributeNS(null, "class", color);
  document.getElementById(group+'_transitiongroup').appendChild(c1)
l = document.createElementNS(svg, "line")
  l.setAttributeNS(null, "x1", rx1);
  l.setAttributeNS(null, "y1", labelHeight);
  l.setAttributeNS(null, "x2", bx1-bufferTransition);
  l.setAttributeNS(null, "y2", labelHeight);
  l.setAttributeNS(null, "class", color);
  document.getElementById(group+'_transitiongroup').appendChild(l)
c2 = document.createElementNS(svg, "line")
  c2.setAttributeNS(null, "x1", bx1-bufferTransition);
  c2.setAttributeNS(null, "y1", (labelHeight-5));
  c2.setAttributeNS(null, "x2", bx1-bufferTransition);
  c2.setAttributeNS(null, "y2", (labelHeight+5));
  c2.setAttributeNS(null, "class", color);
  document.getElementById(group+'_transitiongroup').appendChild(c2)
la = document.createElementNS(svg, "text")
  la.setAttributeNS(null, "id", group+'t1-'+(i));
  la.setAttributeNS(null, "y", (labelHeight+15));
  la.setAttributeNS(null, "text-anchor", "middle");
  la.setAttributeNS(null, "x", (bx1-bufferTransition)-(transition/2));
  la.setAttributeNS(null, "class", color);
  latextNode = document.createTextNode(document.getElementById(group+'_transition').value);
    la.appendChild(latextNode);
  document.getElementById(group+'_transitiongroup').appendChild(la)

// Sign Spacing

let kind, type, placement, nextplacement, sign, z, f

for (f=1; f<=3; f++) {
  type = document.getElementsByName(group+'shown_'+f)
  var placementLabel = document.getElementById(group+'_sign_placement_'+f).value
  placement = accidentStart-(Number(placementLabel)/3)-12.5
  var n = (f+1)
  if (n<=3) {
    nextplacement = accidentStart - (Number(document.getElementById(group+'_sign_placement_'+n).value)/3)
  } else {
    nextplacement = rx1
  }

  for (z = 0; z < type.length; z++) {
      if (type[z].checked) {
        kind = type[z].value;
      }
  }
  sign = document.createElementNS(svg, "svg")
    sign.setAttributeNS(null, "id", group+'_'+f)
    sign.setAttributeNS(null, "x", placement)
    sign.setAttributeNS(null, "y", "155")
    document.getElementById("Layer_1").appendChild(sign)
  sign = document.createElementNS(svg, "polygon")
    sign.setAttributeNS(null, "class", 'st2 orange')
    sign.setAttributeNS(null, "points", "50,0 0,50 50,100 100,50")
    sign.setAttributeNS(null, "style", "transform: scale(0.25);")
    document.getElementById(group+'_'+f).appendChild(sign)

    let g = document.createElementNS(svg, "g")
    g.setAttributeNS(null, "id", group+'_linegroup_'+f);
    document.getElementById("Layer_1").appendChild(g)
      var tempx = placement+12.5

  c1 = document.createElementNS(svg, "line")
    c1.setAttributeNS(null, "x1", tempx);
    c1.setAttributeNS(null, "y1", (labelHeight-5));
    c1.setAttributeNS(null, "x2", tempx);
    c1.setAttributeNS(null, "y2", (labelHeight+5));
    c1.setAttributeNS(null, "class", color);
    document.getElementById(group+'_linegroup_'+f).appendChild(c1)
  l = document.createElementNS(svg, "line")
    l.setAttributeNS(null, "x1", tempx);
    l.setAttributeNS(null, "y1", labelHeight);
    l.setAttributeNS(null, "x2", nextplacement);
    l.setAttributeNS(null, "y2", labelHeight);
    l.setAttributeNS(null, "class", color);
    document.getElementById(group+'_linegroup_'+f).appendChild(l)
  c2 = document.createElementNS(svg, "line")
    c2.setAttributeNS(null, "x1", nextplacement);
    c2.setAttributeNS(null, "y1", (labelHeight-5));
    c2.setAttributeNS(null, "x2", nextplacement);
    c2.setAttributeNS(null, "y2", (labelHeight+5));
    c2.setAttributeNS(null, "class", color);
    document.getElementById(group+'_linegroup_'+f).appendChild(c2)
  la = document.createElementNS(svg, "text")
    la.setAttributeNS(null, "id", group+'t1-'+(i));
    la.setAttributeNS(null, "y", (labelHeight+15));
    la.setAttributeNS(null, "text-anchor", "middle");
    la.setAttributeNS(null, "x", ((tempx)+((nextplacement-(tempx))/2)));
    la.setAttributeNS(null, "class", color);
    latextNode = document.createTextNode(placementLabel);
      la.appendChild(latextNode);
    document.getElementById(group+'_linegroup_'+f).appendChild(la)

//setImage(layer,         svg,   type, number, other)
  setImage(group+'_sign', group, kind, f, "transform: scale(0.25);")
}



// Spacing
/*
  while (i<=3) {
    let h = document.createElementNS(svg, "polygon")
    h.setAttributeNS(null, "id", group+'p1-'+i);
    h.setAttributeNS(null, "class", "st2 "+color);
    h.setAttributeNS(null, "opacity", "0.75 ");
    h.setAttributeNS(null, "points", (x1+10)+",155 "+x1+",165 "+(x1+10)+",175 "+x2+",165");
    document.getElementById("Layer_1").appendChild(h)
    let cap1 = document.createElementNS(svg, "line")
    cap1.setAttributeNS(null, "id", group+'c1-'+(i));
    cap1.setAttributeNS(null, "x1", (x1+10));
    cap1.setAttributeNS(null, "y1", (labelHeight-5));
    cap1.setAttributeNS(null, "x2", (x1+10));
    cap1.setAttributeNS(null, "y2", (labelHeight+5));
    cap1.setAttributeNS(null, "class", color);
    document.getElementById("Layer_1").appendChild(cap1)
    let line = document.createElementNS(svg, "line")
    line.setAttributeNS(null, "id", group+'l1-'+(i));
    line.setAttributeNS(null, "x1", (x1+10));
    line.setAttributeNS(null, "y1", labelHeight);
    line.setAttributeNS(null, "x2", (x1+space+10));
    line.setAttributeNS(null, "y2", labelHeight);
    line.setAttributeNS(null, "class", color);
    document.getElementById("Layer_1").appendChild(line)
    let cap2 = document.createElementNS(svg, "line")
    cap2.setAttributeNS(null, "id", group+'c2-'+(i));
    cap2.setAttributeNS(null, "x1", (x1+space+10));
    cap2.setAttributeNS(null, "y1", (labelHeight-5));
    cap2.setAttributeNS(null, "x2", (x1+space+10));
    cap2.setAttributeNS(null, "y2", (labelHeight+5));
    cap2.setAttributeNS(null, "class", color);
    document.getElementById("Layer_1").appendChild(cap2)
    let label = document.createElementNS(svg, "text")
    label.setAttributeNS(null, "id", group+'t1-'+(i));
    label.setAttributeNS(null, "y", (labelHeight+15));
    label.setAttributeNS(null, "text-anchor", "middle");
    label.setAttributeNS(null, "x", ((x1+9)+(((x1+space+8)-(x1+9))/2)));
    label.setAttributeNS(null, "class", color);
    let textNode = document.createTextNode(value);
    label.appendChild(textNode);
    document.getElementById("Layer_1").appendChild(label)
    h = null
    line = null
    label = null
    i+=1;
    x1+=space;
    x2+=space;
  }
// Transition
  i = 1
  var valueB = Number(g1.elements[1].value);
  var transition = (valueB/8)
   x1+=12;
  var line1=x1
   x2=x1+5;
  var y1=148;
  var y2=143;
  while (i<=5) {
    let h = document.createElementNS(svg, "polygon")
    h.setAttributeNS(null, "id", group+'a1-'+i);
    h.setAttributeNS(null, "class", "st2 "+color);
    h.setAttributeNS(null, "opacity", "0.75 ");
    h.setAttributeNS(null, "points", (x1)+","+y1+" "+(x1+2)+","+y2+" "+x2+","+y2+" "+(x2+2)+","+y1);
    document.getElementById("Layer_1").appendChild(h)
    h = null
    i+=1;
    if (i > 5) {
      break;
    }
    x1+=transition;
    x2+=transition;
    y1-=15;
    y2-=15;
  }
  let trancap1 = document.createElementNS(svg, "line")
  trancap1.setAttributeNS(null, "id", group+'tran-1');
  trancap1.setAttributeNS(null, "x1", (line1));
  trancap1.setAttributeNS(null, "y1", (labelHeight-5));
  trancap1.setAttributeNS(null, "x2", (line1));
  trancap1.setAttributeNS(null, "y2", (labelHeight+5));
  trancap1.setAttributeNS(null, "class", color);
  document.getElementById("Layer_1").appendChild(trancap1)
  let tranline = document.createElementNS(svg, "line")
  tranline.setAttributeNS(null, "id", group+'tran-l');
  tranline.setAttributeNS(null, "x1", (line1));
  tranline.setAttributeNS(null, "y1", (labelHeight));
  tranline.setAttributeNS(null, "x2", (x2+2));
  tranline.setAttributeNS(null, "y2", (labelHeight));
  tranline.setAttributeNS(null, "class", color);
  document.getElementById("Layer_1").appendChild(tranline)
  let trancap2 = document.createElementNS(svg, "line")
  trancap2.setAttributeNS(null, "id", group+'tran-2');
  trancap2.setAttributeNS(null, "x1", (x2+2));
  trancap2.setAttributeNS(null, "y1", (labelHeight-5));
  trancap2.setAttributeNS(null, "x2", (x2+2));
  trancap2.setAttributeNS(null, "y2", (labelHeight+5));
  trancap2.setAttributeNS(null, "class", color);
  document.getElementById("Layer_1").appendChild(trancap2)
  let tranlabel = document.createElementNS(svg, "text")
  tranlabel.setAttributeNS(null, "id", group+'tran-t');
  tranlabel.setAttributeNS(null, "y", (labelHeight+15));
  tranlabel.setAttributeNS(null, "text-anchor", "middle");
  tranlabel.setAttributeNS(null, "x", ((line1)+(((x2+2)-(line1))/2)));
  tranlabel.setAttributeNS(null, "class", color);
  let trantextNode = document.createTextNode(valueB);
  tranlabel.appendChild(trantextNode);
  document.getElementById("Layer_1").appendChild(tranlabel)
  */
}

function moveAll() {
  move('group1', 'green');
  move('group2', 'red');
  move('group3', 'orange');
  move('group4', 'yellow');
  move('group5', 'blue');
  move('group6', 'purple');
}
