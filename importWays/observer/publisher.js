function Publisher(){
    this.observers = [];
    this.state = "";
    this.addOb = function(observer){
        var flag = false;
        for (var i = this.observers.length - 1; i >= 0; i--) {
            if(this.observers[i]===observer){
                flag=true;                
            }
        };
        if(!flag){
            this.observers.push(observer);
        }
        return this;
    };
    this.removeOb = function(observer){
        var observers = this.observers;
        for (var i = 0; i < observers.length; i++) {
            if(observers[i]===observer){
                observers.splice(i,1);
            }
        };
        return this;
    };
    this.notice=function(){
        var observers = this.observers;
        for (var i = 0; i < observers.length; i++) {
                observers[i].update(this.state);
        };
    }

}


module.exports = Publisher;