var fs = require('fs');

function readfile(res, fileName) {
  fs.readFile(fileName, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}

// tạo mới file và thêm nội dung nếu file đó chưa tồn tại, nếu file tồn tại, chèn thêm nội dung vào cuối nội dung của file
function createFileUsingAppend(fileName, content) {
  fs.appendFile(fileName, content, function (err) {
    if (err) throw err;
    console.log('createFileUsingAppend: Saved!');
  });
}

// tạo file mới với nội dung trống
function createEmptyFileUsingOpen(fileName, mode) {
  fs.open(fileName, mode ?? 'w', function (err, file) {
    if (err) throw err;
    console.log('createFileUsingOpen: Saved!');
  });
}

// tạo file mới nếu chưa tồn tại, thay thế nội dung mới vào file
function writeFile(fileName, content) {
  fs.writeFile(fileName, content, function (err) {
    if (err) throw err;
    console.log('writeFile: Saved!');
  });
}

// xóa file
function deleteFile(fileName) {
  fs.unlink(fileName, function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
}

// đổi tên
function renameFile(oldFileName, newFileName,) {
  fs.rename(oldFileName, newFileName, function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
}

module.exports = {
  readfile,
  writeFile,
  deleteFile,
  renameFile,
  createFileUsingAppend,
  createEmptyFileUsingOpen,
}