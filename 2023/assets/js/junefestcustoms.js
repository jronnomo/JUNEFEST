//Photos from imagekit
function inputCarouselmages(){
	fetch('https://api.imagekit.io/v1/files/?name=IMG_0033.JPG&tr=w-288,h-200', {
        method: 'GET',
		mode: 'cors',
		headers: {'Authorization': `Basic cHJpdmF0ZV9Hck95dUxBd203M0F4QlJwMFNYREl4UmUrR3M9Og==`,
				  'Access-Control-Allow-Origin': 'https://63b8c3f0d6a7971908a721e5--sprightly-mermaid-bca16a.netlify.app/',
				  'Origin': 'https://63b8c3f0d6a7971908a721e5--sprightly-mermaid-bca16a.netlify.app/',
				  'Access-Control-Request-Method': 'GET',
				  'Access-Control-Allow-Credentials': 'true'},
	  })
	.then(res => res.json())
	.then(data => {
		console.log(data)
		document.querySelector('#firstPic').src = data.url
	})
	.catch(err => {
		console.log(`Error is ${err}`)
	})
}
inputCarouselmages()

// function testAPI(){
// 	fetch('https://ttp.cbp.dhs.gov/schedulerapi/slots?orderBy=soonest&limit=1&locationId=5142&minimum=1&fbclid=IwAR3WRquU2i-p5PBfC62mxhILi_fbcBc8Mc1aea5g_4vTHs7j4S8YXpdGGYE')
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(err => {
// 		console.log(`Error is ${err}`)
// 	})
// }
// testAPI()



//Photos from imagekit
// ImageMap Zooms
Array.from(document.querySelectorAll(".location")).forEach(location => location.addEventListener("click", zoomIn))

function zoomIn(click){
	let element = click.target
	if(element.classList.contains("Courthaus")){
		console.log(element.classList)
		console.log(document.querySelectorAll(".Courthaus"))
		document.querySelector("#Courthaus").classList.toggle('hidden')
	}
}

// var detailsBox = document.getElementById('barmap');

// document.addEventListener('mouseover', function (e) {
//   if (e.target.tagName == 'path') {
//     var content = e.target.dataset.name;
//     detailsBox.innerHTML = content;
//     detailsBox.style.opacity = "100%";
//   }
//   else {
//     detailsBox.style.opacity = "0%";
//   }
// });

// window.onmousemove = function (e) {
//   var x = e.clientX,
//       y = e.clientY;
//   detailsBox.style.top = (y + 20) + 'px';
//   detailsBox.style.left = (x) + 'px';
// };

// COUNTDOWN
let juneFestDate = new Date('June 17, 2023 00:00:00').getTime()
let currentDate = new Date()
var countDownTimer = setInterval(function(){
	var now = new Date().getTime();
	var timeleft = juneFestDate - now;
	// Calculating the days, hours, minutes and seconds left	
	var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
	// Result is output to the specific element
	document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("mins").innerHTML = minutes + "m " 
    document.getElementById("secs").innerHTML = seconds + "s "
	// Display the message when countdown is over
	if (timeleft < 0) {
		clearInterval(myfunc);
		document.getElementById("days").innerHTML = ""
		document.getElementById("hours").innerHTML = "" 
		document.getElementById("mins").innerHTML = ""
		document.getElementById("secs").innerHTML = ""
		document.getElementById("end").innerHTML = "LET'S GOOO!!";
	}
}, 1000)