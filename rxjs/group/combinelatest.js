const {interval,range,concat} =  require("rxjs");
const { take } = require( 'rxjs/operators');


var timer = interval(1000).pipe(take(4));
var sequence = interval(100).pipe(take(4));
var result = concat(timer, sequence);
result.subscribe(x => console.log(x));
