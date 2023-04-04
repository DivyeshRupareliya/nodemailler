var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
  res.send("This is A Home route");
});

  // URL :  http://localhost:3000/easy_mailer
router.post('/easy_mailer', function (req, res, next) {

  //GENEARTE OTP
  var OTP = `${Math.trunc(Math.random() * 1000000)}`

  // ****************************************************************************************************************************
  //           Email Sending Code START Here     ********************************************************************************
  // ****************************************************************************************************************************
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "divubhai36@gmail.com",
      pass: "awmwhsuldczyflys",
    },
  });

  var mailOptions = {
    from: "divubhai36@gmail.com",
    // ONLY CHANGE EMAIL ADDRESS HERE AND SENDING CONTENT
    to: "divyeshrupareliya150@gmail.com",
    subject: "NodeMailer Testing ",
    text: ":::   nodemailer   :::",
    html:`
    <div style="background-color: blue; text-align: center; padding:5px; color: white; border-radius: 10px;"><h1>Rupareliya Divyesh</h1></div>
    <h2>Forgot Password OTP Email</h2>
    <p>Hello, Divyesh</p>
    <h2>OTP: ${OTP}</h2>
    <p>Please enter this OTP in the provided field to reset your password.</p>
    <p>If you did not request this password reset, please ignore this email and your account will remain secure.</p>
    <p>Thank you,</p>
    <p>The Admin Team</p>
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
        console.log("Email sent: " + info.response);
      }
    });
    // **************************************************************************************************************************
    //           Email Sending Code END Here       ******************************************************************************
    // **************************************************************************************************************************
    try {
      res.send("Mail Send Successfully")
      console.log("Mail Send Successfully");
    } catch {
      console.log(error);
    }

  });


  // URL :  http://localhost:3000/mailer
router.post('/mailer', function (req, res, next) {
//GENEARTE OTP
  var OTP = `${Math.trunc(Math.random() * 1000000)}`
  async function main() {
    // let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "divubhai36@gmail.com",
        pass: "awmwhsuldczyflys",
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "divubhai36@gmail.com", // sender address
      to: "divyeshrupareliya150@gmail.com", // list of receivers
      // to: ["divyeshrupareliya150@gmail.com","divubhai36@gmail.com"], // list of receivers
      subject: "Hello my self Rupareliya Divyesh", // Subject line
      text: "WEL-COME, Thank-you to Join Us", // plain text body
      html: `<h1>${OTP}</h1>
      <p>Please Verify And Do Not share this otp</p>
      <h1> WEL-COME</h1>
       <table border="1" width="100%" align="center" cellpadding="20">
          <tr bgcolor="skyblue">
            <th>Name</th>
            <th>username</th>
            <th>password</th>
          </tr>
          <tr>
            <td>Divyesh</td>
            <td>divyeshr1</td>
            <td>pass@123</td>
          </tr>
          <tr>
            <td>Kenil</td>
            <td>kenilmangroliya</td>
            <td>ken@123</td>
          </tr>
       </table>
       <img src="https://images.caricos.com/b/bmw/2015_bmw_6-series_cabrio/images/1920x1080/2015_bmw_6-series_cabrio_99_1920x1080.jpg" width="100%  " >

       `, // html body

    });

    try {
      res.send("Mail Send Successfully")
      console.log("Mail Send Successfully");
    } catch {
      console.log(error);
    }
  }

  main().catch(console.error);
});

module.exports = router;
