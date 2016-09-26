/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	makeLiveElement = __webpack_require__(1);
	Stringify = __webpack_require__(2);


	// "CHRISTMAS LIGHTS!"
	// elems = []
	//
	// origin = {x: window.innerWidth / 2, y: window.innerHeight / 2};
	// radius = 200.0;
	// num = 75;
	// elemText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	//
	// var central = makeLiveElement({
	//   position: {
	//     x: origin.x,
	//     y: origin.y,
	//     centered: true
	//   },
	//   size: {
	//     width: 50,
	//     height: 50
	//   },
	//   styles: {
	//     background: Stringify.rgb(40, 60, 255, .8),
	//     opacity: ".8",
	//     borderRadius: "50px"
	//   }
	// });
	//
	//
	//
	// var colors = ["red", "blue", "green", "yellow"]
	//
	// for(var i = 0; i < num; i++) {
	//   elems.push(
	//     makeLiveElement({
	//       position: {
	//         x: Math.cos(i * 360.0 / num) * radius + origin.x,
	//         y: Math.sin(i * 360.0 / num) * radius + origin.y,
	//         centered: true
	//       },
	//       size: {width: 10, height: 10},
	//       text: elemText[i],
	//       styles: {
	//         background: sample(colors),
	//         opacity: ".3",
	//         borderRadius: "100px",
	//         fontSize: "8px"
	//       }
	//     })
	//   )
	// }
	//
	// function sample(array) {
	//   return array[Math.floor(Math.random() * array.length)];
	// }
	// function randomDist(fromTo) {
	//   return Math.random() * fromTo * 2 - fromTo;
	// }
	//
	//
	// setInterval(function() {
	//   elems.forEach((elem, i) => {
	//     elem.styles({
	//       background: sample(colors)
	//     })
	//   });
	// }, 1000)
	//
	//
	// setTimeout(function() {
	//   elems.forEach((elem, i) => {
	//     elem.move({x: randomDist(200), y: randomDist(200)}, 5000);
	//     var newSize = Math.random() * 30
	//     elem.grow({width: newSize, height: newSize}, 5000);
	//     elem.rotate({z: randomDist(i)}, 5000)
	//   })
	// }, 2500)





	"ROTATION EXERCISE"

	elems = [];
	elems.forEach((e, i) => {
	  e.rotate({z: 360 - i*4}, 100000);
	  e.size({height: 200}, 3000);
	  e.move({x: i * 30}, 3000);
	})

	elems = [];
	for(var i = 0; i < 500; i++) {
	  elems.push(
	    makeLiveElement({
	      position: {x: (i * 20) % 500 + 350, y: i + 50},
	      size: {width: 2, height: 60},
	      styles: {
	        opacity: ".8",
	        background: Stringify.rgb((i) % 255, 0 , Math.abs(123 - i) % 255, .5)
	      }
	   })
	  )
	}

	elems.forEach((e, i) => {
	  e.rotate({z: 1000 + i * 20}, 20000);
	})



	// "STRIPES"
	//
	// stripes = [];
	// colors = ["crimson", "blue", "yellow", "teal", "goldenrod", "MediumSpringGreen"]
	// for(var i = 0; i < 50; i++) {
	//   stripes.push(
	//     makeLiveElement({
	//       position: {x: i * 30, y: -100},
	//       size: {width: 40, height: window.innerHeight + 200},
	//       rotation: {z: (Math.random() * 20) - 10},
	//       // rotation: {z: Math.random() * 50 - 25},
	//       styles: {
	//         opacity: ".8",
	//         background: colors[Math.floor(Math.random() * 6)]
	//       }
	//     })
	//   )
	// }


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Stringify = __webpack_require__(2);

	function makeLiveElement(params) {
	  var parent = params.parent || document.body;
	  var type = params.type || 'div';
	  var position = Object.assign({x: 0, y: 0}, params.position);
	  var size = Object.assign({width: 100, height: 100}, params.size);
	  var rotation = Object.assign({x: 0, y: 0, z: 0}, params.rotation);
	  var text = params.text || '';
	  var styles = params.styles || {};
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




	// for(var i = 0; i < 360; i += 1) {
	//   deg = toRad(i);
	//   radius = 200;
	//   centerX = 300;
	//   centerY = 300;
	//   divs.push(makeLiveDiv(centerX + Math.sin(deg) * radius, centerY + Math.cos(deg) * radius, i));
	// }
	//
	// function bigmove() {
	//   divs.forEach((div) => {
	//     div.move(Math.random() * 1 - .5, Math.random() * 1 - .5);
	//   })
	// }
	//
	// setInterval(bigmove, 25);

	module.exports = makeLiveElement;


/***/ },
/* 2 */
/***/ function(module, exports) {

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


/***/ }
/******/ ]);