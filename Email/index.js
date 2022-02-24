var { transporter } = require('./account');

var mailOptions = {
  from: 'tranthuan.ttt@gmail.com',
  to: 'leviettien1808@gmail.com, thuant@ames.edu.vn',
  subject: 'Sending Email using Node.js',
  text: 'Multiple send mail'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});