const nodemailer = require("nodemailer");

const smtpConfig = {
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	
		from: `${process.env.SMTP_NAME} <${process.env.SMTP_EMAIL}>`
	}

const transporter = nodemailer.createTransport(
	smtpConfig
);

exports.send = async (options) => {
	await transporter.sendMail(options);
};
