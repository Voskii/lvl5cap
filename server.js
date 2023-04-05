const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const morgan = require('morgan')
require('dotenv').config
URI = process.env.URI

app.use(express.json())
app.use(morgan('dev'))

//connect to database
mongoose.connect(URI)
    .then(()=> console.log(`connected to db`))
    .catch(err => console.log(err.message))

//Route
app.use("/cards", require('./routes/cardsRouter.js'))
app.use("/decks", require('./routes/decksRouter.js'))

//Error handler
app.use((err, req, res) => {
    console.log(err)
    return res.send({errMsg: err.message})
})


//Listen
app.listen(9000, () => {
    console.log('Server is running on port 9000')
})