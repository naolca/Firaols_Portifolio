
const nodemailer = require('nodemailer');
export default function handler(req, res)  {
    const { name, email, subject, message } = req.body;
    console.log("this is the body");
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'firaolibrahim28@gmail.com',
            pass: 'jtbl sewa psej zqwn',
        },
        secure: true,
    });
    const mailData = {
        from: email,
        to: 'firaolibrahim28@gmail.com',
        subject: `Message From ${name}`,
        text: message,
        html: `<div>${message}</div>`,
    };
    transporter.sendMail(mailData, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
    res.status(200).json({ status: 'OK' });
};

