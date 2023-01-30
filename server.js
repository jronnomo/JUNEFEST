const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000

app.use(cors())
app.options('*', cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/2023', 'index.html')
})
app.put('/updateImages', (req, res) => {
    console.log(req)
    fetch('https://api.imagekit.io/v1/files/?name=IMG_0033.JPG&tr=w-288,h-200', {
        headers: {Authorization: `Basic cHJpdmF0ZV9Hck95dUxBd203M0F4QlJwMFNYREl4UmUrR3M9Og==`,
                  'Access-Control-Allow-Origin': '*',
                  'Origin': '*',
                  'Access-Control-Request-Method': 'GET',
                  'Access-Control-Allow-Credentials': 'true'},
      })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.url){
            res.status(200).send({message: 'Image updated successfully'});
            document.querySelector('#firstPic').src = data.url
        }else{
            res.status(404).send({message: 'Image not found'});
        }
    })
    .catch(err => {
        console.log(`Error is ${err}`)
        res.status(500).send({message: 'Error while fetching image'});
    })
});
app.listen(PORT, () => console.log(`Server running on ${PORT}`))