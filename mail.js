//chunk3
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '5d99318b965b34102171f7dba42b050f-95f6ca46-4b59c8fd',
        domain: 'sandbox7bfe212c7780449c85d6f2fc65a7aaf3.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

//chunk4
const sendMail = (email, text, cb) => {
    const mailOptions = {
        from: 'jagdishpawar8105@gmail.com',
        to: email,
        subject: 'NotchUp Trial Class Booked successfully',
        text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}
module.exports = sendMail;