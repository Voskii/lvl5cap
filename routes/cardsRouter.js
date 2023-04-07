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
    Flashcard.find({ deck: req.params.deckID }, (err, Flashcard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Flashcard)
    })
})

// get one
cardsRouter.get("/:cardID", (req, res, next) => {
    Flashcard.find({ _id: req.params.cardID }, (err, Flashcard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Flashcard)
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

//update one card
cardsRouter.put("/:cardId" , (req, res, next) => {
    Flashcard.findOneAndUpdate(
        {_id : req.params.cardId},
        {new: true},
        (err, updatedCard) => {
            if(err){
                res.status(500)
                return next(err)
            }
        return res.status(201).send(updatedCard)
        }
    )
})


module.exports = cardsRouter


//Postman flashcard input form
// {
//     "question": "fake Data",
//     "awnser": "more  useless data",
//     "deckId": "642dd479b9f402dfc42e2404"
//     }