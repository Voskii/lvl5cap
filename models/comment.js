const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    }
})



module.exports = mongoose.model("Comments", commentSchema)