const express = require('express')
const cors = require('cors')
const { getRandomNumber } = require('./utils')

const app = express()

const hostname = '127.0.0.1'
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    console.log('Incoming request from: ', req.ip)

    const randomNumber = getRandomNumber()
    res.send(`Hello World! ${randomNumber}`)
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
