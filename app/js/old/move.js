function move(group, color) {
  var svg = "http://www.w3.org/2000/svg"
  var accidentStart = 375
  var accidentEnd = 500
  var labelHeight = 185;
  var verticalTaper = ((143-85)/3)
  var i = 1
  var j = 1
  let g, h, c1, c2, l, la

    /*
      Work backwards to do correct spacing.
      *     Reset
      D:    Downstream Taper
      C:    Buffer
      B:    Transition Taper
      A3:   Sign Three
      A2:   Sign Two
      A1:   Sign One
    */

/********************************************/
//Reset
/********************************************/
// Sign Spacing
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
// Downstream Taper
  if (document.getElementById(group+'_tapergroup')) {
    hold = document.getElementById(group+'_tapergroup')
    hold.parentNode.removeChild(hold)
  }
// Buffer
  if (document.getElementById(group+'_buffergroup')) {
    hold = document.getElementById(group+'_buffergroup')
    hold.parentNode.removeChild(hold)
  }
// Transition Taper
  if (document.getElementById(group+'_transitiongroup')) {
    hold = document.getElementById(group+'_transitiongroup')
    hold.parentNode.removeChild(hold)
  }


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


/********************************************/
// Sign Spacing
/********************************************/

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
    la.setAttributeNS(null, "x", tempx);
    la.setAttributeNS(null, "class", color);
    latextNode = document.createTextNode(placementLabel);
      la.appendChild(latextNode);
    document.getElementById(group+'_linegroup_'+f).appendChild(la)

  //setImage(layer, svg, type, number, other)
    setImage(group+'_sign', group, kind, f, "transform: scale(0.25);")
  }
// End
}

function moveAll() {
  move('group1', 'green');
  move('group2', 'red');
  move('group3', 'orange');
  move('group4', 'yellow');
  move('group5', 'blue');
  move('group6', 'purple');
}
