const MailService = require("../service/MailService")

exports.nodemailer = function (request, response) {
	console.log("RUN MAILER");
	MailService.sendMail(request.body.mail, request.body.message)
	console.log(request.body.mail);
	response.send(request.body)
}

