require('dotenv').config()

console.log('web 39 rulez')

const express = require('express')

const server = express()

server.use(express.json()) //teaches express to parse rew bodies as JSON

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development') { //on Heroku machine, an env variable 
    const cors = require('cors') //is called "NODE_ENV" 
    server.use(cors()) //with a value of production (string)
}

server.use('*', (req, res) => {
    res.send('<h1>success</h1>')
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})