var Stringify = require('../utils/stringify');

function makeLiveElement(params) {
  var parent = params.parent || document.body;
  var type = params.type || 'div';
  var position = Object.assign({x: 0, y: 0}, params.position);
  var size = Object.assign({width: 100, height: 100}, params.size);
  var rotation = Object.assign({x: 0, y: 0, z: 0}, params.rotation);
  var text = params.text || '';
  var styles = Object.assign({position: "absolute"}, params.styles);
  var image = Object.assign({size: Stringify.size(size)}, params.image);


  var elem = document.createElement(type);
  elem.classList.add('live-element');

  function assignElementPosition(position) {
    if (position.centered) {
      elem.style.left = position.x - size.width / 2 + 'px';
      elem.style.top = position.y - size.height / 2 + 'px';
    } else {
      elem.style.left = position.x + 'px';
      elem.style.top = position.y + 'px';
    }
  }
  function assignElementSize(size) {
    elem.style.width = size.width + 'px';
    elem.style.height = size.height + 'px';
  }
  function assignElementRotation(rotation) {
    for (axis in rotation) {
      rotation[axis] %= 360;
    }
    elem.style.transform = Stringify.rotation(rotation);
  }
  function assignElementImage(image) {
    if (image.path) {
      document.createElement('img');
      for (property in image) {
        if (property === 'path') {
          elem.style.backgroundImage = 'url(images/' + image.path + ')';
        } else {
          elem.style[Stringify.background(property)] = image[property];
        }
      }
    }
  }
  function assignElementStyles(styles) {
    if (Object.keys(styles).length > 0) {
      for (key in styles) {
        elem.style[key] = styles[key];
      }
    }
  }
  function assignElementText(text) {
    if (text === '' || text) {
      elem.innerHTML = text;
    }
  }

  assignElementPosition(position);
  assignElementSize(size);
  assignElementRotation(rotation);
  assignElementImage(image);
  assignElementStyles(styles);
  assignElementText(text);

  parent.appendChild(elem);


  var liveElement = {
    _change: function(values, newValues, assignmentFunc) {
      if (newValues === undefined) {
        return values;
      } else {
        if (typeof newValues === 'string') {
          text = newValues;
          assignmentFunc(text);
        } else {
          for (key in newValues) { values[key] = newValues[key]; }
          assignmentFunc(values);
        }
        return this;
      }
    },
    position: function(newPosition) {
      return this._change(position, newPosition, assignElementPosition);
    },
    size: function(newSize) {
      return this._change(size, newSize, assignElementSize);
    },
    rotation: function(newRotation) {
      return this._change(rotation, newRotation, assignElementRotation);
    },
    image: function(newImage) {
      return this._change(image, newImage, assignElementImage);
    },
    styles: function(newStyles) {
      return this._change(styles, newStyles, assignElementStyles);
    },
    text: function(newText) {
      return this._change(text, newText, assignElementText);
    },
    width: function(newWidth) {
      if (newWidth === undefined) {
        return size.width;
      } else {
        size.width = newWidth;
        elem.style.width = size.width + 'px';
        return this;
      }
    },
    height: function(newHeight) {
      if (newHeight === undefined) {
        return size.height;
      } else {
        size.height = newHeight;
        elem.style.height = size.height + 'px';
        return this;
      }
    },

    _vectorShift: function(values, vectors, assignmentFunc) {
      for (key in vectors) {
        values[key] += vectors[key];
      }
      assignmentFunc(values);
      return this;
    },
    shift: function(posVectors) {
      return this._vectorShift(position, posVectors, assignElementPosition);
    },
    shiftSize: function(sizeVectors) {
      return this._vectorShift(size, sizeVectors, assignElementSize);
    },
    shiftRotation: function(rotationVectors) {
      return this._vectorShift(rotation, rotationVectors, assignElementRotation);
    },

    _animate: function(func, vectors, time) {
      var self = this;
      var numFrames = time / 20;
      var slice = {};
      for (key in vectors) {
        slice[key] = vectors[key] / numFrames || 0;
      }
      var timeoutID = setInterval(function() {
        if (numFrames <= 0) {
          clearInterval(timeoutID) ;
        } else {
          func.call(self, slice);
          numFrames--;
        }
      }, 20)
    },
    move: function(posVectors, time) {
      this._animate(this.shift, posVectors, time);
      return this;
    },
    grow: function (sizeVectors, time) {
      this._animate(this.shiftSize, sizeVectors, time);
      return this;
    },
    rotate: function(rotationVectors, time) {
      this._animate(this.shiftRotation, rotationVectors, time);
      return this;
    }
  }

  return liveElement;
}



function toRad(num) {
  return num * Math.PI / 180;
}

var divs = [];

module.exports = makeLiveElement;
