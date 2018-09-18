require.register("./foo.js", function(module, exports){
    module.exports = function(x) {
      console.log(x);
    };
  });
  console.log(require);
  var foo = require("./foo.js");
foo("hi");