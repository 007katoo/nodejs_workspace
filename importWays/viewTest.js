var x = require('./view');
console.log(x);
var xObj = new x();
 console.log(x) //{ [Function: View] test1: [Function] }
 xObj.test()
 console.log(x.test1) //[Function]
 x.test1() //test1