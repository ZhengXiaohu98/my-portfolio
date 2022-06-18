// Creates data string with a given timestamp
function getDate(timeStamp) {
	const date = new Date(timeStamp);
	const dateStr = (date.getMonth() + 1) +
			"/" + date.getDate() +
			"/" + date.getFullYear() +
			"   " + (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
			":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes());
	return dateStr;
}

// Creates a new comment
function createComment(c) {
	const dateStr = getDate(c.timeStamp);
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
	return newComment;
}

// Creates a comment list
function createCommentList(comments) {
	const comment_container = document.getElementById("comment_container");
	for (var c of comments) {
		const newComment = createComment(c);
		// add the new comment to comment container
		comment_container.appendChild(newComment);
	}
}

// Fetchs comments from the server
async function getComments() {
	const responseFromServer = await fetch('/get-comments');
	const resObj = await responseFromServer.json();
	//create Comment list
	createCommentList(resObj.comments);
}

getComments();