var CLASS = function(name) {
    this.name = name;
}
CLASS.prototype.getName = function() {
    console.log(this.name);
}

module.exports = CLASS;