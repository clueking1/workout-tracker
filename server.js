const express = require('express')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutTrackerdb', { useNewUrlParser: true })

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})