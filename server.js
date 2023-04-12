const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
require('dotenv').config()
uri = process.env.URI


mongoose.set('strictQuery', true);
//Middleware (for every request)
app.use('/decks', express.json())
app.use('/comments', express.json())
app.use('/flashcards', express.json()) // looks for a request body and turns it into a 'req.body
app.use(morgan('dev')) // logs requests to the console

//Connect to database
mongoose.connect(uri, console.log("Connected to the DB"));

//Route. Use these in Postman
app.use("/flashcards", require('./routes/cardsRouter.js'))
app.use("/decks", require('./routes/decksRouter.js'))
app.use("/comments", require('./routes/commentRouter.js'))

//Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//Listen
app.listen(9000, () => {
    console.log('Server is running on port 9000')
})