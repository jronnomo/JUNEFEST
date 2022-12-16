function inputCarouselmages(){
	fetch('https://api.imagekit.io/v1/files/?name=IMG_0033.JPG&tr=w-288,h-200', {
        method: 'GET',
		mode: 'cors',
		headers: {'Authorization': `Basic cHJpdmF0ZV9Hck95dUxBd203M0F4QlJwMFNYREl4UmUrR3M9Og==`,
				  'Access-Control-Allow-Origin': '10.0.0.58:80',
				  'Access-Control-Request-Method': 'GET',
				  'Access-Control-Allow-Credentials': 'true'},
	  })
	.then(res => res.json())
	.then(data => {
		console.log(data)
	})
	.catch(err => {
		console.log(`Error is ${err}`)
	})
}

inputCarouselmages()

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