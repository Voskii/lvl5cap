import React, { useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card.js'


export default function Deck(props){
    const {data, index, decks, setDecks} = props
    const [cards, setCards] = useState([])
    const [editCard, setEditCard] = useState(false)
    const info = [
    { question: 'obi-wan', answer: 'kenobi' , _id: 9001},
    { question: 'darth', answer: 'vader' , _id: 9002},
    { question: 'count', answer: 'dooku' , _id: 9003},
    { question: 'asajj', answer: 'ventress' , _id: 9004}
]

    const delDeck = (deckId) => 
        axios.delete(`/decks/${deckId}`)
            .then(res => {
                setDecks(prev => prev.filter(deck => deck._id !== deckId))
            .catch(err => console.log(err))
            })
    
    const popCards = (deckId) => {
        axios.get(`/flashcards/${deckId}`)
            .then(res => {
                console.log(`popcards func onclick deck:`, res.data)
                setCards(res.data)
            })
        setEditCard(!editCard)
    }

    return (
        <div>
            {editCard? <button onClick={()=>{setEditCard(!editCard)}}>Back 2 Deck</button> : ''}
            {editCard?
            cards.map((card, index) => <Card key={index} data={card} index={index} />)
            :
            ''
            }
        
        <div className='deck' onClick={() => popCards(data._id)}>
            <h1>{data.title}</h1>
                <div>
                    <h1>{data.flashcards}</h1>
                    <button className='deckbutt' onClick={() => delDeck(data._id)}>Delete this Deck</button>
                </div>
        </div>
        </div>
    )
}