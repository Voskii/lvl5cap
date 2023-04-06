const mongoose = require('mongoose')
const Schema = mongoose.Schema


const flashcardSchema = new Schema({
    question: {
        type: String,
        required: true,
    },
    awnser: {
        type: String,
        required: true,
    },
    deckId: {
        type: Schema.Types.ObjectId,
        ref: "Deck",
        required: true
    },
    deckTitle: {
        type: Schema.Types.String,
        ref: "Deck"
    }
})



module.exports = mongoose.model("Flashcard", flashcardSchema)