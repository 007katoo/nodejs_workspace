module.exports = {
    name:"simple module export",
    getName:function() {
        console.log(this.name);
    }
}
console.log(module);