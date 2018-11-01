const nodemailer = require('nodemailer');


export async function getSendEmailPage(req, res, next) {


  nodemailer.createTestAccount((err, account) => {

      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
              user: "marczaharescusmtp@gmail.com",
              pass: "marcsmtp"
          }
      });


      let mailOptions = {
          from: '"Testy Test 👻" <foo@example.com>',
          to: 'zaharescumarc10@gmail.com',
          subject: 'Hello ✔',
          text: 'Hello world?',
          html: '<b>Hello world?</b>'
      };


      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          res.redirect('http://localhost:3030/');
      });
  });
}
