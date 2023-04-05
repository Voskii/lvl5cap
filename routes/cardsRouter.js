const express = require('express')
const cardsRouter = express.Router()
const Flashcard = require("../models/flashcard.js")
const decksRouter = require('./decksRouter.js')

//Get all cards
cardsRouter.get("/flashcards", async (req, res, next) => {
    try{
        const flashcards = await Flashcard.find()
        return res.status(200).send(flashcards)
    }
    catch (err) {
        res.status(500)
        return next(err)
    }
})

//Post one
cardsRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const newCard = new Card(req.body)
    newCard.save((err, savedCard) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedCard)
    })
})


// Get by Deck
cardsRouter.get("/:deckID", (req, res, next) => {
    Card.find ({ deck: req.params.deckID }, (err, Card) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Card)
    })
})


module.exports = cardsRouter