// var nodemailer = require('nodemailer');
// import asyncHandler from "express-async-handler";

// export const sendEmail = asyncHandler(async(data, req, res) =>{
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.gmail.com",
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //       user: process.env.MAIL_ID, // generated ethereal user
    //       pass: process.env.MP, // generated ethereal password
    //     },
    //   });
    //   let info = await transporter.sendMail({
    //     from: 'mymy29082002@gmail.com', // sender address
    //     to: 'khanhmy29082002@gmail.com', // list of receivers
    //     subject: "test", // Subject line
    //     text: "hello", // plain text body
    //     // html: "hello", // html body
    //   });
    
//       console.log("Message sent: %s", info.messageId);
//       // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
//       // Preview only available when sending through an Ethereal account
//       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//       // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     })

import nodemailer from"nodemailer";

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'mymy29082002@gmail.com', // generated ethereal user
      pass: 'kbfgjmabthlmyvcz', // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: 'mymy29082002@gmail.com', // sender address
    to: 'khanhmy29082002@gmail.com', // list of receivers
    subject: "Yêu cầu nhập lại mật khẩu", // Subject line
    text: "Quên mật khẩu", // plain text body
    html: "Quên mật khẩu", // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);