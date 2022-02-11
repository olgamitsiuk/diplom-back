const fetch = require("cross-fetch")
exports.post = function (request, response) {
	console.log("Run POST");
	console.error(request.body);

	let Bot_token= "2121745513:AAFxfbRUOJs-3rfIYE16VzvJeur2KZtzJEc";
	let chat_id = "312079534";
	let txt = encodeURI(
		"name: " + request.body.name + "\n" +
		"tel: " + request.body.tel + "\n" + "message: " + request.body.body);

	let url = "https://api.telegram.org/bot" + Bot_token +"/sendMessage?chat_id=" + chat_id + "&text=" + txt;

	console.log(url);
	fetch(url)
		.then(res => {
			console.log(res);

		})
		.then()
		.catch()

	response.send(request.body);

}