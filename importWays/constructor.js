var CLASS = function(args){
    this.args = args;
}
CLASS.getName = function(){
    console.log(this.args); 
}
CLASS.prototype.getName = function(){
    console.log("TEST"); 
}
module.exports = CLASS;