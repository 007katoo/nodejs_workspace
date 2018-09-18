var subscriber = require('./subscriber');
var publisher = require('./publisher');
console.log(subscriber);
var oba = new subscriber(),
obb = new subscriber();
var pba = new publisher();

pba.addOb(oba);
pba.addOb(obb);

// oba.update = function(state){
// console.log(state+"hello!");
// }
obb.update = function(state){
console.log(state+"world!");
}
pba.state = "open ";
pba.notice();

