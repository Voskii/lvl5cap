const express = require('express')
const decksRouter = express.Router()
const Deck = require("../models/deck.js")

//get all decks
decksRouter.get("/", async(req, res, next) => {
    console.log(typeof(Deck))
    Deck.find((err, Deck) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(Deck)
    })
})

//post one
decksRouter.post("/", (req, res, next) => {
    console.log(req.body)
    const newDeck = new Deck(req.body)
    newDeck.save((err, savedDeck) => {
        if(err){
            res.status(500)
            return next(err)
        }
    return res.status(201).send(savedDeck)
    })
})

//delete one
decksRouter.delete("/:deckId", (req, res, next) =>{
    Deck.findOneAndDelete({ _id: req.params.deckId }, (err, deletedItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database`)
    })
})

//get deck by search terms
decksRouter.get("/search", (req, res, next) => {
    const {deck} = req.query
    const pattern = new RegExp(deck)
    Deck.find(
        { title: { $regex: pattern, $options: 'i' } },
        (err, decks) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(decks)
        }
    )
})

//get by query example of a search funciton: localhost:9000/deck/search?deck=2
decksRouter.get("/search", (req, res, next) => {
    const { deck } = req.query
    const pattern = new RegExp(deck)
    Deck.find({ title: {$regex: pattern, $options: 'i'} }, (err,decks) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send (decks)
    })
})


module.exports = decksRouter





// Postman Deck input form
// {
//     "title": "Schema Vocab",
//     "flashcards": 0
// }
