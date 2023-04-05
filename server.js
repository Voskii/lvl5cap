const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config
URI = process.env.URI

//Middleware (for every request)
app.use('/decks', express.json())
app.use('/flashcards', express.json()) // looks for a request body and turns it into a 'req.body
app.use(morgan('dev')) // logs requests to the console

//Connect to database
mongoose.connect(URI, {dbName: flashcardproject},  console.log("Connected to the DB"))
    // .then(()=> console.log(`connected to db`))
    // .catch(err => console.log(err.message))

//Route
app.use("/cards", require('./routes/cardsRouter.js'))
app.use("/decks", require('./routes/decksRouter.js'))

//Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//Listen
app.listen(9000, () => {
    console.log('Server is running on port 9000')
})