"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var el = document.getElementById('my-element');
// Create an Observable that will publish mouse movements
var mouseMoves = rxjs_1.fromEvent(el, 'mousemove');
// Subscribe to start listening for mouse-move events
var subscription = mouseMoves.subscribe(function (evt) {
    // Log coords of mouse movements
    console.log("Coords: " + evt.clientX + " X " + evt.clientY);
    // When the mouse is over the upper-left of the screen,
    // unsubscribe to stop listening for mouse movements
    if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
    }
});
