const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 3003

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => console.log(`Backend is running on port ${port}`))