const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/2023', 'index.html')
})
app.put('/', (req, res) => {
    fetch('https://api.imagekit.io/v1/files/?name=IMG_0033.JPG&tr=w-288,h-200', {
        headers: {Authorization: `Basic cHJpdmF0ZV9Hck95dUxBd203M0F4QlJwMFNYREl4UmUrR3M9Og==`,
                  'Access-Control-Allow-Origin': 'https://main--sprightly-mermaid-bca16a.netlify.app/',
                  'Origin': 'https://main--sprightly-mermaid-bca16a.netlify.app/',
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
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`))