var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
var events = require('events');

rs.on('open', function () {
  console.log('The file is open');
});

var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');