import React, { useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card.js'


export default function Deck(props){
    
    const {data, index, decks, setDecks} = props
    console.log(data)
    const [cards, setCards] = useState([])
    const [showCard, setshowCard] = useState(false)
//     const info = [
//     { question: 'Would you like some pickles', answer: 'Absofreakinlutely' , _id: 9001},
//     { question: 'darth', answer: 'vader' , _id: 9002},
//     { question: 'count', answer: 'dooku' , _id: 9003},
//     { question: 'asajj', answer: 'ventress' , _id: 9004}
// ]

    const delDeck = (deckId) => {
        axios.delete(`/decks/${deckId}`)
            .then(res => {
                setDecks(prev => prev.filter(deck => deck._id !== deckId))
            })
            .catch(err => console.log(err))
    }

    const popCards = (deckId) => {
        axios.get(`/flashcards/${deckId}`)
            .then(res => {
                console.log(`popcards func onclick deck:`, res.data)
                setCards(res.data)
            })
            .catch(err => console.log(err))
        console.log(cards)
        setshowCard(!showCard)
    }

    return (
        <div>
            {showCard? <button onClick={()=>{setshowCard(!showCard)}}>Close Deck</button> : ''}
            {showCard?
            cards.map((card, index) => <Card key={index} data={card} index={index} cards={cards} setCards={setCards}/>)
            :
            ''
            }
        <div className='deck' onClick={() => popCards(data._id)}>
            <h2>{data.title}</h2>
                <div>
                    <h2 className='card-length'>{cards.length === 0? '': `Cards:${cards.length}`}</h2>
                    <button className='deckbutt' onClick={() => delDeck(data._id)}>Delete Deck</button>
                </div>
        </div>
        </div>
    )
}