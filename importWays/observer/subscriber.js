//订阅者
function Subscriber(){
    this.update = function(data){
          console.log(data);
    };
}

module.exports = Subscriber;