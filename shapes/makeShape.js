makeLiveElement = require('../components/makeLiveElement');

function splitText(text, sides) {
  var split = [];
  var splitLength = Math.floor(text.length / sides);
  var remainder = text.length % sides;
  var idx = 0;
  while (sides > 0) {
    if (remainder > 0) {
      split.push(text.slice(idx, idx + splitLength + 1));
      idx += splitLength + 1;
      remainder--;
    } else {
      split.push(text.slice(idx, idx + splitLength));
      idx += splitLength;
    }
    sides--;
  }
  return split;
}

function toRad(num) {
  return num * Math.PI / 180;
}
//
// idx = 0;
//
// function grow() {
//   m.image({size: idx + "px"})
//   idx++;
// }
// setInterval(grow, 50);


function makeShape(params = {}) {
  var type = params.type || 'div';
  var sides = params.sides || 4;
  var origin = Object.assign({x: 300, y: 300}, params.origin);
  var radius = params.radius || 100;
  var edgeWidth = params.edgeWidth || 100;
  var rotation = Object.assign({x: 0, y: 0, z: 0}, params.rotation);
  var text =  splitText(params.text, sides) || [];
  var style = params.styles || {};


  var shape = document.createElement(type);
  shape.classList.add('live-shape');

  elements = [];
  for(var i = 0; i < sides; i++) {
    var angle = i == 0 ? 0 : toRad(360 / i) ;
    
    elements.push(
      makeLiveElement({
        position: {
          x: origin.x + Math.sin(angle) * radius,
          y: origin.y + Math.cos(angle) * radius
        },
        parent: shape,
        text: text.length > 0 ? text[i] : ""

      })
    )
  }
  document.body.appendChild(shape);


}

// makeLiveDiv(centerX + Math.sin(deg) * radius, centerY + Math.cos(deg) * radius

module.exports = makeShape;
