// Fetchs comments from the server
async function getComments() {
	const responseFromServer = await fetch('/get-comments');
	const resObj = await responseFromServer.json();
	console.log(resObj.comments);

	const list = document.getElementById("comments_list");
	for (var x of resObj.comments) {
		const newComment = document.createElement("LI");
		const comments_txt = document.createTextNode(x.name + ": " + x.content);
		newComment.appendChild(comments_txt);
		list.appendChild(newComment);
	}
}

getComments();