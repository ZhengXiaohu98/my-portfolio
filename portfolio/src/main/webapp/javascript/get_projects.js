/**
 * This script file will display the project content
 */

const projects = [
	{
		name:"GradSchoolZero",
		timeline:"Oct 2021",
		link:"https://github.com/ZhengXiaohu98/graduate_system",
		details:[
							"A graduate school system which is used to do school management",
							"Implemented features include applying to be a student/an instructor, viewing applications, sending system notification, setting up class period, adding/suspending students/instructors, etc",
							"Responsibilities: Distributing works, relational table design, document writing",
							"Building environment: Python, Django, HTML, CSS."
						]
	},
	{
		name:"STUDENT_INFO_SYSTEM",
		timeline:"Aug 2021",
		link:"https://github.com/ZhengXiaohu98/Student_info_system",
		details:[
							"A GUI application which allows different types of users (Student, Instructor, School Administration, Root User) to manage their personal information and course information.",
							"Implemented features: Students are allowed to add/search/drop courses, instructors are allowed to check the course & student information, School Administrators are allowed to add/drop courses, root users have all the permissions. ",
							"Building environment: C++, QT creator, SQLite"
						]
	},
	{
		name:"Basic OpenCV",
		timeline:"May 2020",
		link:"https://github.com/ZhengXiaohu98/OpenCV_DEMO",
		details:[
							"A program which demonstrates basic functionalities of OpenCV library.",
							"Implemented features: changing color space and rotating images, creating trackbars, mouse event and keyboard responses, face detection.",
							"Building environment: C++, Visual Studio, OpenCV library"
						]
	},
	{
		name:"QTcpServer",
		timeline:"June 2021",
		link:"https://github.com/ZhengXiaohu98/QTcpServer",
		details:[
							"A simple GUI application which allows both server and client to send and receive messages from each other.",
							"Implemented features: Connecting/Disconnecting functionalities for both sides, sending/receiving messages for both sides."
						]
	}
];

// i: current project index
let i = 0;

function changeProject(val) {
	// going backward or forward
	i = (i+projects.length+val)%projects.length

	// text holds the HTML project content
	let text = "";

	text += "<div class='animate__animated animate__slideInLeft'>"
	text += "<h2>" + "Project: " + projects[i].name + "</h2>";
	text += "<h3>" + "Timeline: " + projects[i].timeline + "</h3>";
	text += "<a href='" + projects[i].link + "'>" + projects[i].name + " - GitHub</a>";

	text += "<ul>";
	// loop thru the project details
	for (let d of projects[i].details) {
		text += "<li>" + d + "</li>";
	}
	text += "</ul></div>";

	document.getElementById("project_detail").innerHTML = text;
}

changeProject(0);