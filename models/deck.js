const mongoose = require('mongoose')
const Schema = mongoose.Schema

const deckSchema = new Schema({
    deckTitle: {
        type: String,
        required: true,
    },
    totalFlashcards: {
        type: Number,
    },
})



module.exports = mongoose.model("deckCard", deckSchema)