// module.exports对应为一空对象{},此写法相当于将该对象直接赋值为匿名函数;
// module.exports = function(){
//     console.log(name);
// }

// 这样就是重新给 exports 赋值，它将不再是 module.exports 的引用，二者将无任何联系。
// exports = function() {
//     console.log("hi");
// }

/**
 * 
exports 是指向 module.exports对应变量的一个引用；
module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
require 引用模块后，返回的是 module.exports 而不是 exports!!!!!
exports.xxx 相当于在导出对象上挂属性，该属性对调用模块直接可见
exports = 相当于给 exports 对象重新赋值，调用模块不能访问 exports 对象及其属性
如果此模块是一个类，就应该直接赋值 module.exports，这样调用者就是一个类构造器，可以直接 new 实例。
 */

// 一般而言，用this来定义构造函数的属性较多，用prototype定义构造函数的方法较多，因为属性较于方法来说使用频率更高。
// 你想一想如果每次实例化对象都要执行定义的方法，那对于内存来说岂不是一种浪费

var somethings = function() {
    this.doSomethings = function() {
        console.log('do somethings');
    }
}
somethings.prototype.share = [];

module.exports = somethings;
exports = module.exports;
exports.doSomethingElse = function() {
    console.log('do somethingElse');
}


