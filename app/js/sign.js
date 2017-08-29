var g1Image = document.getElementsByName('G1shown')

for (var i = 0; i < g1Image.length; i++) {
  g1Image[i].addEventListener('change', function() {
    if (this.checked) {
      setImage('g1_sign', this.value);
    }
  });
}

var select = document.getElementById('g1_sign_image')
select.addEventListener('change', function() {
    setImage('g1_sign', 'image');
  })

var textbox = document.getElementById('g1_sign_text')
textbox.addEventListener('keyup', function() {
    setImage('g1_sign', 'text');
  })

function setImage(svg, type, other) {
  var image = document.getElementById(svg+'_image');
  var text = document.getElementById(svg+'_text');

//reset
  if (document.getElementById(svg+'group')) {
    var group = document.getElementById(svg+'group');
    group.parentNode.removeChild(group)
  }


  if (type === 'image') {
    image.style.display = 'inline-block';
    text.style.display = 'none';
    if (image.value === 'flagger') {
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g")
      g.setAttributeNS(null, "id", svg+'group');
      document.getElementById(svg).appendChild(g)
      let s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M57.1,58c-0.2,1-0.3,2-0.5,2.9c-0.4,2.3-0.8,4.6-1.1,6.9c-0.4,2.2-0.7,4.4-1.1,6.7c-0.1,0.7-0.2,1.4-0.4,2.1 c-0.2,0.7-0.2,1.4-0.4,2.1c0,0.1-0.1,0.2-0.2,0.2c-0.7,0-1.5,0-2.2,0c-0.2,0-0.2-0.1-0.2-0.2c0-1.3,0-2.5,0-3.8 c0-3.8-0.1-7.7-0.1-11.5c0-4.3-0.1-8.6-0.1-13c0-2.5,0-5-0.1-7.5c0-0.2,0-0.3-0.3-0.3c-2.1-0.4-4.1-0.8-6.2-1.2 c-2.2-0.4-4.4-0.8-6.5-1.2c-0.9-0.2-1.8-0.4-2.7-0.5c-0.2,0-0.3-0.1-0.3-0.3c0-0.7,0-1.5,0-2.2c0-0.2,0-0.3,0.2-0.3 c9.2,0,18.3,0,27.5,0c0.6,0,1.2,0.2,1.7,0.3c2.8,0.5,5.5,1.1,8.3,1.6c0.5,0.1,0.5,0.1,0.6-0.4c0.1-0.4,0.2-0.8,0.4-1.2 c0.4-1,0.7-2,1.1-3c0.1-0.1,0.1-0.2,0.2-0.1c0.8,0.2,1.6,0.3,2.4,0.5c0.2,0,0.2,0.1,0.2,0.3c-0.1,0.5-0.3,1.1-0.4,1.7 c-0.6,2.2-1.1,4.4-1.7,6.7c-0.1,0.2-0.1,0.3-0.4,0.3c-2.2-0.2-4.4-0.3-6.5-0.5c-1.7-0.1-3.3-0.2-5-0.4c-0.2,0-0.4,0-0.5,0 c-0.1,0-0.1,0-0.1,0.2c0.1,2.1,0.3,4.2,0.4,6.2c0.1,1.9,0.2,3.8,0.4,5.7c0.1,1.5,0.2,3.1,0.3,4.6c0.2,2.3,0.3,4.5,0.5,6.8 c0.2,2.9,0.4,5.8,0.6,8.7c0.1,1.3,0.2,2.6,0.3,3.9c0,0.2,0,0.3-0.2,0.3c-0.7,0-1.5,0-2.2,0c-0.2,0-0.2-0.1-0.3-0.2 c-0.6-2.3-1.1-4.6-1.7-6.8c-1.2-4.4-2.2-8.8-3.3-13.2C57.3,58.3,57.2,58.2,57.1,58z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M33.7,44.1c0,2.4,0,4.8,0,7.1c0,0.2-0.1,0.3-0.3,0.3c-3.8,0-7.7,0-11.5,0c-0.2,0-0.2,0-0.2-0.2c0-4.8,0-9.5,0-14.3 c0-0.2,0.1-0.3,0.3-0.3c3.8,0,7.7,0,11.5,0c0.2,0,0.2,0.1,0.2,0.2C33.7,39.3,33.7,41.7,33.7,44.1z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M61.9,29.4c0,3.2-2.7,5.8-5.9,5.8c-3.3,0-5.9-2.8-5.9-5.8c0-3,2.6-5.8,5.9-5.8C59.2,23.6,61.9,26.2,61.9,29.4z");
      document.getElementById(svg+'group').appendChild(s)
      s = null
    } else if (image.value === 'rlc') {
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g")
      g.setAttributeNS(null, "id", svg+'group');
      document.getElementById(svg).appendChild(g)

      let s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M60.1,71.8c0-0.4,0-0.7,0-0.9c0-6.8,0-13.6,0-20.3c0-0.4-0.2-0.9-0.4-1.2c-2.1-2.6-4.3-5.2-6.4-7.8 c-0.3-0.4-0.5-0.8-0.5-1.4c0-3.9,0-7.7,0-11.6c0-0.3,0-0.5,0-0.9c2.4,0,4.7,0,7.1,0c0,0.3,0,0.5,0,0.8c0,3.1,0,6.1,0,9.2 c0,0.5,0.1,0.9,0.4,1.2c2.2,2.7,4.4,5.4,6.6,8.1c0.2,0.3,0.4,0.7,0.4,1.1c0,7.7,0,15.4,0,23c0,0.6-0.1,0.9-0.8,0.8 c-1.9,0-3.7,0-5.6,0C60.7,71.8,60.5,71.8,60.1,71.8z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M40.4,71.8c-2.4,0-4.7,0-7.2,0c0-0.2,0-0.5,0-0.7c0-14.2,0-28.5,0-42.7c0-0.6,0.2-0.8,0.8-0.8c1.9,0,3.8,0,5.6,0 c0.7,0,0.8,0.2,0.8,0.9c0,2.4,0,4.8,0,7.1c0,11.8,0,23.5,0,35.3C40.4,71.1,40.4,71.4,40.4,71.8z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M52.8,51.5c0.8,0,1.6,0,2.4,0c0.1,0,0.4,0.3,0.4,0.4c0,1.3,0,2.5,0,3.8c0,0.2-0.3,0.4-0.5,0.5c-0.6,0.1-1.2,0-1.8,0 c-0.1,0-0.4-0.2-0.4-0.4C52.8,54.4,52.8,53,52.8,51.5z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M55.5,61.7c0,0.6,0,1.2,0,1.8c0,0.4-0.1,0.6-0.6,0.6c-0.5,0-1.1,0-1.6,0c-0.4,0-0.5-0.2-0.5-0.6c0-1.2,0-2.4,0-3.7 c0-0.4,0.2-0.6,0.6-0.5c0.5,0,1.1,0,1.6,0c0.4,0,0.6,0.2,0.6,0.6C55.5,60.5,55.5,61.1,55.5,61.7z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M55.5,71.8c-0.9,0-1.8,0-2.7,0c0-1.5,0-2.9,0-4.3c0-0.1,0.3-0.3,0.4-0.3c0.6,0,1.2,0,1.8,0c0.2,0,0.4,0.2,0.4,0.3 C55.5,68.9,55.5,70.3,55.5,71.8z");
      document.getElementById(svg+'group').appendChild(s)
      s = null
    } else if (image.value === 'llc') {
      let g = document.createElementNS("http://www.w3.org/2000/svg", "g")
      g.setAttributeNS(null, "id", svg+'group');
      document.getElementById(svg).appendChild(g)

      let s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M40.4,71.8c0-0.4,0-0.7,0-0.9c0-6.8,0-13.6,0-20.3c0-0.4,0.2-0.9,0.4-1.2c2.1-2.6,4.3-5.2,6.4-7.8c0.3-0.4,0.5-0.8,0.5-1.4 c0-3.9,0-7.7,0-11.6c0-0.3,0-0.5,0-0.9c-2.4,0-4.7,0-7.1,0c0,0.3,0,0.5,0,0.8c0,3.1,0,6.1,0,9.2c0,0.5-0.1,0.9-0.4,1.2 c-2.2,2.7-4.4,5.4-6.6,8.1c-0.2,0.3-0.4,0.7-0.4,1.1c0,7.7,0,15.4,0,23c0,0.6,0.1,0.9,0.8,0.8c1.9,0,3.7,0,5.6,0 C39.8,71.8,40.1,71.8,40.4,71.8z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M60.1,71.8c2.4,0,4.7,0,7.2,0c0-0.2,0-0.5,0-0.7c0-14.2,0-28.5,0-42.7c0-0.6-0.2-0.8-0.8-0.8c-1.9,0-3.8,0-5.6,0 c-0.7,0-0.8,0.2-0.8,0.9c0,2.4,0,4.8,0,7.1c0,11.8,0,23.5,0,35.3C60.1,71.1,60.1,71.4,60.1,71.8z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M47.8,51.5c-0.8,0-1.6,0-2.4,0c-0.1,0-0.4,0.3-0.4,0.4c0,1.3,0,2.5,0,3.8c0,0.2,0.3,0.4,0.5,0.5c0.6,0.1,1.2,0,1.8,0 c0.1,0,0.4-0.2,0.4-0.4C47.8,54.4,47.8,53,47.8,51.5z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M45.1,61.7c0,0.6,0,1.2,0,1.8c0,0.4,0.1,0.6,0.6,0.6c0.5,0,1.1,0,1.6,0c0.4,0,0.5-0.2,0.5-0.6c0-1.2,0-2.4,0-3.7 c0-0.4-0.2-0.6-0.6-0.5c-0.5,0-1.1,0-1.6,0c-0.4,0-0.6,0.2-0.6,0.6C45.1,60.5,45.1,61.1,45.1,61.7z");
      document.getElementById(svg+'group').appendChild(s)
      s = null

      s = document.createElementNS("http://www.w3.org/2000/svg", "path")
      s.setAttributeNS(null, "d", "M45.1,71.8c0.9,0,1.8,0,2.7,0c0-1.5,0-2.9,0-4.3c0-0.1-0.3-0.3-0.4-0.3c-0.6,0-1.2,0-1.8,0c-0.2,0-0.4,0.2-0.4,0.3 C45.1,68.9,45.1,70.3,45.1,71.8z");
      document.getElementById(svg+'group').appendChild(s)
      s = null
    }


  } else {
    image.style.display = 'none';
    text.style.display = 'block';

    let textbox = document.createElementNS("http://www.w3.org/2000/svg", "text")
    textbox.setAttributeNS(null, "id", svg+'group');
    textbox.setAttributeNS(null, "x", 50);
    textbox.setAttributeNS(null, "y", 50);
    textbox.setAttributeNS(null, "text-anchor", "middle");
    wrapText(text.value, textbox)
    document.getElementById(svg).appendChild(textbox)

  }
}

function wrapText (text, container) {
  var words = text.split(' '),
      newText = [],
      line = '',
      span,
      i,
      test = ''

  for (i = 0; i < words.length; i++) {
    if (((test.length + words[i].length) > 11) && newText.length > 0) {
      newText.push(test)
      test = ''
    } else if (((test.length + words[i].length) > 8) && (newText.length == 0 || newText.length > 1)) {
      newText.push(test)
      test = ''
    }
      test += words[i];
      test += ' '
  }
  newText.push(test)

  var interval = 20
  var textHeight = (newText.length*10) + (interval*newText.length)
  var half = Math.floor(newText.length/2)
  var y = ((55 - (interval*half)))

  for (i = 0; i < newText.length; i++) {
    span = document.createElementNS("http://www.w3.org/2000/svg", "tspan")
    span.setAttributeNS(null, "x", 50);
    span.setAttributeNS(null, "y", y);
    line = document.createTextNode(newText[i]);
    span.appendChild(line)
    container.appendChild(span)
    y += interval
  }
}
