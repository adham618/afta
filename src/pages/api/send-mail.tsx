import { NextApiRequest, NextApiResponse } from "next";

let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
  secure: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  // console.log(data);
  const msg = {
    to: "adhamtarek291@gmail.com", // Change to your recipient
    from: "adhamtarek291@gmail.com", // Change to your verified sender
    subject: "Summit online registration",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">

        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />

        <link rel="stylesheet" href="css/styles.css?v=1.0">

      </head>

      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new email from your contact from in your <a href="https://adhamtarek.vercel.app">site</a>  from ${data.firstName} ${data.middleName}, his email is: ✉️ ${data.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <br>
              </div>
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Regards<br>${data.firstName}</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://adhamtarek.vercel.app" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Site</a>
                <a href="https://github.com/adham618/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>
                <a href="https://linkedin.com/in/adham-tarek/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">LinkedIn</a>

              </div>
              </div>
      </body>
      </html>`,
  };
  await new Promise((resolve, reject) => {
    transporter.sendMail(msg, function (err: any, info: unknown) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ success: true });
}
