import nodemailer from "nodemailer";

export const contact = (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.telefon.length === 0 ||
    data.service.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }
  console.log("here is data " + data);
  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "mehmetkaldirimde@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  let mailOptions = {
    from: "mathdenizi@gmail.com",
    to: "mehmetkaldirimde@gmail.com",
    subject: `message from ${data.name}`,
    html: `
  
              <h3>Informations<h3/>
              <ul>
              <li>Name: ${data.name}<li/>
              <li>Email: ${data.telefon}<li/>
              </ul>
              <h3>Service</h3>
              <p>${data.service}<p/>
              `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res.status(400).json({ msg: "Please Fill All The Fields!" });
      res.status(200).json({ msg: "Thank You For Contacting Kaldirim." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
};
