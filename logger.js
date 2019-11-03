const EventEmitter = require('events');


class Logger extends EventEmitter{
    log(message){
        this.emit('Message', {id:1, url:'http://rhasan.me/'});
        console.log(message);
    }
}


module.exports = Logger;