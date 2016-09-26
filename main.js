makeLiveElement = require('./components/makeLiveElement');
Stringify = require('./utils/stringify');

// 
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
//         color: "white",
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




// "ROTATION EXERCISE"
//
// elems = [];
// elems.forEach((e, i) => {
//   e.rotate({z: 360 - i*4}, 100000);
//   e.size({height: 200}, 3000);
//   e.move({x: i * 30}, 3000);
// })
//
// elems = [];
// for(var i = 0; i < 500; i++) {
//   elems.push(
//     makeLiveElement({
//       position: {x: (i * 20) % 500 + 350, y: i + 50},
//       size: {width: 2, height: 60},
//       styles: {
//         position: "absolute",
//         opacity: ".8",
//         background: Stringify.rgb((i) % 255, 0 , Math.abs(123 - i) % 255, .5)
//       }
//    })
//   )
// }
//
// elems.forEach((e, i) => {
//   e.rotate({z: 1000 + i * 20}, 20000);
// })



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
