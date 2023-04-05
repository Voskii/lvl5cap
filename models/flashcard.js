const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flashcardSchema = new Schema({
    deckTitle: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    awnser: {
        type: String,
        required: true,
    }
})



module.exports = mongoose.model("Flashcard", flashcardSchema)