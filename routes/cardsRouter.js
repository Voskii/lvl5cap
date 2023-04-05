const express = require('express')
const cardsRouter = express.Router()
const Flashcard = require("../models/flashcard.js")

//Get all cards
cardsRouter.get("/", async (req, res, next) => {
    try{
        const flashcards = await Flashcard.find()
        return res.status(200).send(flashcards)
    }
    catch (err) {
        res.status(500)
        return next(err)
    }
})




module.exports = cardsRouter