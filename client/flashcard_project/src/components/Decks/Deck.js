import axios from 'axios';
import React from 'react';

export default function Deck(props){
    const {data, index, decks, setDecks} = props
    const delDeck = (deckId) => axios.delete(`/deck/${deckId}`)
                        .then(res => {
                            setDecks(prev => prev.filter(deck => deck._id !== deckId))
                        .catch(err => console.log(err))
                        })
    return (
        <div className='deck'>
            <h1>{data.title}</h1>
                <div>
                    <h1>{data.flashcards}</h1>
                    <button className='deckbutt' onClick={() => delDeck(data._id)} >Delete this Deck</button>
                </div>
        </div>
    )
}