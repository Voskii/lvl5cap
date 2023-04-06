const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deckSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    flashcards: {
        type: Number,
    },
})



module.exports = mongoose.model("Deck", deckSchema)