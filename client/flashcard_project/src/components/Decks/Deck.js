import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card/Card.js'


export default function Deck(props){

    const {data, index, decks, setDecks} = props
    console.log(data)
    const [cards, setCards] = useState([])
    const [showCard, setShowCard] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [noCards, setNoCards] = useState(false)

    const anyCards = (cards) => {
        console.log(`inside any cards compontent:`, cards)
        if(cards === []){
            setNoCards(false)
        }
    }

    const delDeck = (deckId) => {
        if(cards.length === 0){
            console.log('deleted:', deckId)
            axios.delete(`/decks/${deckId}`)
            .then(res => {
                setDecks(prev => prev.filter(deck => deck._id !== deckId))
            })
            .catch(err => console.log(err))
        }
        console.log(`delete deck is doing nothing`)
    }

    const popCards = (deckId) => {
        setClicked(true)
        
        axios.get(`/flashcards/${deckId}`)
            .then(res => {
                console.log(`popcards func onclick deck:`, res.data)
                setCards(res.data)
                anyCards(res.data)
            })
            .catch(err => console.log(err))
           
        console.log(cards)
        setShowCard(!showCard)
    }

//deck
    return (
        <div>
            {showCard? <button onClick={()=>{setShowCard(!showCard)}}>Close Deck</button> : ''}
            {showCard?
            cards.map((card, index) => <Card key={index} data={card} index={index} cards={cards} setCards={setCards} showCard={showCard} setShowCard={setShowCard} deckVisible={true}/>)
            :
            ''
            }
        <div className='deck' onClick={() => popCards(data._id)}>
            <h2>{data.title}</h2>
                <div>
                    <h2 className='card-length'>{cards.length === 0? '': `Cards:${cards.length}`}</h2>
                    {cards.length === 0 && clicked ?
                        <div>
                            <button className='deckbutt' onClick={() => delDeck(data._id)}>Delete Deck</button>
                        </div>
                    :
                    ''
                    }
                    
                </div>
        </div>
        </div>
    )
}