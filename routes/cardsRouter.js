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

// Get by Deck
cardsRouter.get("/:deckId", (req, res, next) => {
    Flashcard.find({ deckId : req.params.deckId }, (err, Flashcard) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Flashcard)
    })
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

// delete function
cardsRouter.delete( "/:cardId", async (req, res, next) =>{
    Flashcard.findByIdAndDelete( {_id: req.params.cardId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item: ${deletedItem} from the database.`)
    })
})

//update one card
cardsRouter.put("/:cardId" , (req, res, next) => {
    Flashcard.findOneAndUpdate(
        {_id : req.params.cardId},
        req.body,
        {new: true},
        (err, updatedCard) => {
            if(err){
                res.status(500)
                return next(err)
            }
            //.send(updatedCard) is causing 500 error due to having numbers in a property lol
        return res.status(201).send(`Card has been updated.`)
        }
    )
})


module.exports = cardsRouter


//Postman flashcard input form
// {
//     "question": "fake Data",
//     "answer": "more  useless data",
//     "deckId": ""
//     }