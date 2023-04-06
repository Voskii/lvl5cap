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

//Post one
cardsRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const newCard = new Flashcard(req.body)
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

//delete one
cardsRouter.delete("/:cardId", (req, res, next) =>{
    Flashcard.findOneAndDelete({ _id: req.params.cardId }, (err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.question} from the database`)
    })
})

module.exports = cardsRouter


//Postman flashcard input form
// {
//     "question": "fake Data",
//     "awnser": "more  useless data",
//     "deckId": "642dd479b9f402dfc42e2404"
//     }