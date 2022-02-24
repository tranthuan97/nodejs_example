// tạo thư mục node_modules, vào thư mục và gõ lệnh npm install <tên-package>
// import và sử dụng
var uc = require('../node_modules/upper-case');
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);