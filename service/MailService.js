const nodemailer = require('nodemailer');

class MailService {

	constructor() {
		this.transporter = nodemailer.createTransport({
			host: "smtp.ukr.net",
			port: 465,
			secure: true,
			auth: {
				user: "react-app-olga@ukr.net",
				pass: "cSa83QCDrV2FjBwU"
			}
		})
	}
	async sendMail(to, message) {
		await this.transporter.sendMail({
			from: "react-app-olga@ukr.net",
			to,
			subject: 'Подписка на рассылку',
			text: message,
			html:
				`
					<div>
						<h1>Спасибо, что подписались на рассылку!</h1>
						<p>С уважением, Ольга Мицюк</p>
						<p>Front-End Developer</p>
						<p>Тел: +38(050) 19 45 116</p>
					</div>
				`
		})
	}
}

module.exports = new MailService();