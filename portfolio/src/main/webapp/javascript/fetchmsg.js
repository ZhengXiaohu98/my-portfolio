// Fetchs a message from the server
async function getMsg() {
	const responseFromServer = await fetch('/message');
	const resObj = await responseFromServer.json();
	//console.log(resObj.messages);
	idx = Math.floor(Math.random()*resObj.messages.length);

	document.getElementById('msg_container').innerText = resObj.messages[idx];
}