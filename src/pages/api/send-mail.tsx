import { NextApiRequest, NextApiResponse } from "next";

let nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port: 465,
  host: "pegesinc.com",
  auth: {
    user: "ceo@pegesinc.com",
    pass: "Sniper20202022",
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
    to: "ceo@pegesinc.com", // Change to your recipient
    from: "ceo@pegesinc.com", // Change to your verified sender
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
            <ul>
                <li Name: <span>${data.title}</span> <span>${data.firstName}</span>
                <span>${data.middleName}</span> <span>${data.SURNAME}</span> </li>
                <li>Gender: ${data.Gender}</li>
                <li>Email: ${data.email}</li>
                <li>Phone: ${data.phone}</li>
                <li>Address: ${data.Address}</li>
                <li>Organization: ${data.Organization}</li>
                <li>Nationality: ${data.nationality}</li>
                <li>State/Region: ${data.STATE}</li>
                <li>He will attend: ${data.IWillAttend}</li>
             </ul>

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
