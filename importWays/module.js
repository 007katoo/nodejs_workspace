var app = {
    name: 'app',
    version: '1.0.0',
    sayName: function(name){
        console.log(this.name);
    }
}
function test() {
    console.log("test");
}

function test2() {
    console.log("test");
}
module.exports = app;
