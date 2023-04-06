import React, { useState, useEffect, useContext } from "react"
import './Decks.css'
import Deck from "./Deck"
import axios from "axios"
import { DeckContext } from "../../Context.js"
import { set } from "mongoose"
import AddDeck from "../AddDeck/AddDeck"

export default function Decks() {
  console.log(DeckContext)
  // const { getDecks } = useContext(DeckContext)
  const [decks, setDecks] = useState([])
  const [addDeckMode, setAddDeckMode] = useState(false)
  
  const getDecks = () =>{
      axios.get('/Deck')
        .then(res => setDecks(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }

  useEffect(() => {
    getDecks()
  }, [])

  return (
    <div className="page">
      <button onClick={()=>{setAddDeckMode(!addDeckMode)}}>{addDeckMode? 'Back 2 Decks' : 'Add New Deck'}</button>
      {addDeckMode?
      <AddDeck addDeckMode={addDeckMode} setAddDeckMode={setAddDeckMode}/>
      :
      <div className='card-grid'>
        {decks.map((deck, index) => <Deck key={index} data={deck} index={index} decks={decks} setDecks={setDecks}/>)}
      </div>
      }
    </div>
  )
}