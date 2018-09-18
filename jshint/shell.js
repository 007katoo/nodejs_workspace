//js脚本检测代码

var cmd=require('node-cmd');

var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('input.js', 'console.log("helloworld");',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.js', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
   fs.unlink("input.js",function(err){
    console.log(err);
   });
});

  
//  console.log(cmd.run('jshint json.js'));

 cmd.get(
    'jshint input.js',
    function(err, data, stderr){
        console.log(data)
    }
);