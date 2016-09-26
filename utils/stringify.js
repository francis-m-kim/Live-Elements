var Stringify = {
  background: function(propString) {
    return "background-" + propString.toLowerCase();
  },
  size: function(size) {
    return size.width + 'px ' + size.height + 'px';
  },
  rgb: function(r,g,b,a) {
    if (a || a === 0 ) {
      return "rgba(" + r + "," + g + "," + b + "," + a + ")"
    } else {
      return "rgb(" + r + "," + g + "," + b + ")"
    }
  },
  rotation: function(rotation) {
    var rotationString = '';
    for (axis in rotation) {
      rotationString += 'rotate' + axis + '(' + rotation[axis] + 'deg) ';
    }
    return rotationString;
  }
}

module.exports = Stringify;
