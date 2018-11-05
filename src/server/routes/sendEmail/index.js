const nodemailer = require("nodemailer");

export async function postSendEmailPage(req, res, next) {
  const { name, email, subject, message } = req.body;

  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "marczaharescusmtp@gmail.com",
        pass: "marcsmtp"
      }
    });

    let mailOptions = {
      from: `${name} <${email}>`,
      to: "marczaharescusmtp@gmail.com",
      subject: `${subject}`,
      text: `${message}`,
      html: `<p>${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      res.redirect("http://localhost:3030/");
    });
  });
}
