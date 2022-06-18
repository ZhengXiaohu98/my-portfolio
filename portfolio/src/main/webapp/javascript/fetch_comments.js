// Fetchs comments from the server
async function getComments() {
	const responseFromServer = await fetch('/get-comments');
	const resObj = await responseFromServer.json();
	// console.log(resObj.comments);

	const comment_container = document.getElementById("comment_container");
	for (var c of resObj.comments) {
		const date = new Date(c.timeStamp);
		const dateStr = (date.getMonth() + 1) +
			"/" + date.getDate() +
			"/" + date.getFullYear() +
			"   " + date.getHours() +
			":" + date.getMinutes()

		// creates a new comment section
		const newComment = document.createElement("div");
		newComment.classList.add("comment_section");
		// creates a comment header section
		const comment_head = document.createElement("div");
		const comment_person = document.createElement("div");
		const comment_time = document.createElement("div");
		comment_person.innerText = c.name;
		comment_time.innerText = dateStr;
		comment_person.classList.add("comment_person");
		comment_time.classList.add("comment_time");
		comment_head.classList.add("comment_head");
		comment_head.appendChild(comment_person);
		comment_head.appendChild(comment_time);
		newComment.appendChild(comment_head);
		// creates a comment content section
		const comment_content = document.createElement("p");
		comment_content.innerText = c.content;
		comment_content.classList.add("comment_content");
		newComment.appendChild(comment_content);
		// add the new comment to comment container
		comment_container.appendChild(newComment);
	}
}

getComments();