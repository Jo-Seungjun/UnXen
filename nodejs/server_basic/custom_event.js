var EventEmitter = require('events');

var custom_object = new EventEmitter();

custom_object.on('call',()=>{
    console.log('called event!!');
});

custom_object.emit('call');