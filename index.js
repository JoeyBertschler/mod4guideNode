require('dotenv').config()
const path = require('path')
const express = require('express')
//console.log('web 39 rulez')

const server = express()

server.use(express.json()) //teaches express to parse rew bodies as JSON
server.use(express.static(path.join(__dirname, 'client/build')))


console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') { //on Heroku machine, an env variable 
    const cors = require('cors') //is called "NODE_ENV" 
    server.use(cors()) //with a value of production (string)
}

//our api comes earlier in the pipeline
server.get('/api/hello', (req,res) =>{
    res.json({ message:'hello'})
})

//catch-all sending back just index.html
server.get('*', (req, res) => { 
    //res.send('<h1>success</h1>')
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})