import React, { useState, useEffect, useContext } from "react"
import './Decks.css'
import Deck from "./Deck"
import axios from "axios"
import { DeckContext } from "../../Context.js"
import { set } from "mongoose"
import AddDeck from "../AddDeck/AddDeck"
import AddCard from "../AddCard/AddCard"

export default function Decks() {
  // console.log(DeckContext)
  // const { getDecks } = useContext(DeckContext)
  const [decks, setDecks] = useState([])
  const [addDeckMode, setAddDeckMode] = useState(false)
  const [userCard, setUserCard] = useState('')
  const [addCardMode, setAddCardMode] = useState(false)
  const [userDeck, setUserDeck] = useState({
    question: '',
    answer: '',
    deckId: ''
  })

  const getDecks = () =>{
      axios.get('/decks')
        .then(res => setDecks(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

  useEffect(() => {
    getDecks()
  }, [])

  return (
    <div className="page">
      <button onClick={()=>{setAddDeckMode(!addDeckMode)}}>{addDeckMode? 'Back 2 Decks' : 'Add New Deck'}</button>
      {addDeckMode  ?
          <AddDeck addDeckMode={addDeckMode} 
            setAddDeckMode={setAddDeckMode} 
            userDeck={userDeck} 
            setUserDeck={setUserDeck} 
            addCardMode={addCardMode} 
            setAddCardMode={setAddCardMode}
            userCard={userCard}
            setUserCard={setUserCard}
          />
      :
        <div className='card-grid'>
          {decks.map((deck, index) => <Deck key={index} data={deck} index={index} decks={decks} setDecks={setDecks}/>)}
        </div>
      }
    </div>
  )
}