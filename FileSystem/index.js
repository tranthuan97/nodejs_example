var http = require('http');
var fs = require('fs');

var file = require('./file');

// file.createFileUsingAppend('mynewfile1.txt', 'this is file 1');
// file.createEmptyFileUsingOpen('mynewfile2.txt');
// file.writeFile('mynewfile3.txt', 'written to this file');

// file.deleteFile('mynewfile3.txt')

file.renameFile('mynewfile1.txt', 'renamemyfile1.txt');

http.createServer(function (req, res) {
  file.readfile(res, 'demofile1.html');
}).listen(8080);