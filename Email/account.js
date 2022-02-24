var nodemailer = require('nodemailer');

exports.transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tranthuan.ttt@gmail.com',
    pass: 'sddztnryoczpvhqr' // mật khẩu được generate trong email
  }
});