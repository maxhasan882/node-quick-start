const fs = require('fs');
const EventEmitter = require('events');

const dirInfo = fs.readdirSync('./');
console.log(dirInfo);

fs.readdir('./', function(err, files){
    if(err){
        console.log(`Error occurs: ${err}`);
    }else{
        console.log(files);
    }
});

const Logger =  require('./logger');
const logger = new Logger();
logger.on('Message', (arg)=> {
    console.log('This is a message event', arg);
});
logger.log('Hasan');

const http = require('http');
const serve = http.createServer((req, res)=>{
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify(["CSE", "EEE", "BBA"]));
        res.end();
    }
});
serve.listen(3000);
console.log(`server listening on port .....`);