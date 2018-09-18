var module = {
    exports: {multiply:function (n) { return n * 1000 }}
  };
  
  // (function(module, exports) {
  //   exports.multiply = function (n) { return n * 1000 };
  // }(module,module.exports))
  // console.log(module);
  var f = module.exports.multiply;

  console.log(f(3));