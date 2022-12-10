// function inputCarouselmages(){
// 	fetch('https://api.imagekit.io/v1/files/?name=IMG_0033.JPG&tr=w-288,h-200', {
//         method: 'GET',
// 		mode: 'cors',
// 		headers: {'Authorization': `Basic private_GrOyuLAwm73AxBRp0SXDIxRe+Gs=`,
// 				  'Access-Control-Allow-Origin': '10.0.0.58:80',
// 				  'Access-Control-Request-Method': 'GET'
// 				  'Access-Control-Allow-Credentials': 'true'},
// 	  })
// 	.then(res => res.json())
// 	.then(data => {
// 		console.log(data)
// 	})
// 	.catch(err => {
// 		console.log(`Error is ${err}`)
// 	})
// }

function inputCarouselmages(){
	fetch('https://api.imagekit.io/v1/files/?name=IMG_0033.JPG&tr=w-288,h-200', {
        method: 'GET',
		mode: 'cors',
		headers: {'Authorization': `Basic private_GrOyuLAwm73AxBRp0SXDIxRe+Gs=`,
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