// photo urls holds the img path
const photo_urls = [
	"img/pictures/profile_img.jpg",
	"img/pictures/food13.jpg",
	"img/pictures/food14.jpg",
	"img/pictures/food15.jpg",
	"img/pictures/food16.jpg",
	"img/pictures/food17.jpg",
	"img/pictures/food1.jpg",
	"img/pictures/food3.jpg",
	"img/pictures/food4.jpg",
	"img/pictures/food5.jpg",
	"img/pictures/food6.jpg",
	"img/pictures/food7.jpg",
	"img/pictures/food8.jpg",
	"img/pictures/food10.jpg",
	"img/pictures/food11.jpg",
	"img/pictures/me2.jpg"
];

// descriptions for the photo
const photo_descriptions = [
	"There isn't much too show, but I still hope you will like them.",
	"Glutinous Rice Cake -- First Try",
	"Having Hot-Pot with friends~",
	"Didn't really like it :/ but looks nice",
	"BBQ! Just too expensive for me :9",
	"Shredded potato with pepepper... Someone said I am a potato lol",
	"Kung Pao chicken -- my version :)",
	"Pepper Beef & Cabbage -- Looks nice :3",
	"Fried Rice -- I know it looks normal, but I still like it...",
	"Watermelon Ice Tea! -- One of my favorites!",
	"Oil Noodles with Beef & Cabbage -- I",
	"Oil Noodles with Beef & Cabbage -- II",
	"Spicy Pot -- I loooove it!!",
	"I don't have a good name for this, but it is tasty lol",
	"Fried tofu? -- Tasty too?",
	"My life is simple, so nothing too exciting... Thanks for looking :)"
];

// animation list for entrances
const animation_list = [
	"animate__animated animate__bounceInLeft",
	"animate__animated animate__bounceInRight",
	"animate__animated animate__bounceInUp",
	"animate__animated animate__rubberBand",
	"animate__animated animate__rollIn",
]

// i: index of the current photo
let i = 0;

// function to move forward/backward
function changePhoto(val) {
	if (val === -1 && i === 0) {
		alert("Life can only move forward...");
		return;
	}
	if (val === 1 && i === photo_urls.length - 1) {
		alert("Everything has an end...");
		return;
	}

	// change the index
	i += val;
	
	let txt = "";
	txt += "<img class='img_container' src='" + photo_urls[i] + "' />";
	const tmpIdx = Math.floor(Math.random()*animation_list.length);
	txt += "<p class='" + animation_list[tmpIdx] +"'>" + photo_descriptions[i] + "</p>";
	document.getElementById("pictures").innerHTML = txt;
}

changePhoto(0);