const deepcopy = require('node-deepcopy').deepCopy;
// import deepcopy from 'deepcopy';

var dad = {
    counts: [1, 2, 3],
    reads: {paper: true},
    };

var kid = deepcopy(dad);

console.log(kid);
//修改kid的counts属性和reads属性
dad.counts.push(4);
console.log(dad); //[1, 2, 3]
console.log(dad.reads.paper); //true
console.log(kid);
