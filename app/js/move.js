function move(group, color) {
  var g1 = document.getElementById(group);
  var svg = "http://www.w3.org/2000/svg";
  var x1=5;
  var x2=25;
  var i = 1;
  var j = 1;
  var value = Number(g1.elements[0].value);
  var space = (value/8)

//Labels Height
  var labelHeight = 185;


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

// Spacing
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
}

function moveAll() {
  move('group1', 'green');
  move('group2', 'red');
  move('group3', 'orange');
  move('group4', 'yellow');
  move('group5', 'blue');
  move('group6', 'purple');
}
