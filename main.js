//Built-in modules are those which can be used without explicitly downloading
var mailer = require('nodemailer');

var transporter = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: '********************',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: '************************',
  to: '************************',
  subject: 'Sending Email using Node.js',
  text: 'Kia bat hy'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});