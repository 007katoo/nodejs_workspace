console.log("Hi");
var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
console.log(int32.length); // 0;
Atomics.store(int32, 0, 123); 
// Atomics.wake(int32, 0, 1);
console.log(int32[0]);