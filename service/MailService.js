const nodemailer = require('nodemailer');

class MailService {
	constructor() {
		this.transporter = nodemailer.createTransport({
			host: "smtp.ukr.net",
			port: 465,
			secure: true,
			auth: {
				user: "react-app-olga@ukr.net",
				pass: "hYZfkqjW4NFKWUlk"
			}
		})
	}

	async sendMail(to, message) {
		await this.transporter.sendMail({
			from: "react-app-olga@ukr.net",
			to,
			subject: 'Newsletter Subscription',
			text: message,
			html:
				`
                    <div>
                        <h1>Thank you for subscribing to the newsletter!</h1>
                        <p>Best regards, Olga Mitsiuk</p>
                        <p>Front-End Developer</p>
                        <p>Phone: +38(050) 19 45 116</p>
                    </div>
                `
		})
	}
}

module.exports = new MailService();