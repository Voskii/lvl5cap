
import React, { useState, useEffect } from "react"
import axios from "axios"
import AddCard from "../AddCard/AddCard"
import "./AddDeck.css"
import "../AddCard/AddCard.css"


function AddDeck(props) {
  const {addDeckMode, setAddDeckMode, setUserDeck, userDeck, addCardMode, setAddCardMode, userCard, setUserCard}  = props
  const [newDeckId, setNewDeckId] = useState('')
  const nextStep = () => {
    
  }

  const handleDeckChange = (e) => {
  console.log(e.target.value)
    setUserDeck({
      title: e.target.value,
      flashcards: 0
    })
  }

  const handleCardChange = (e) => {
    const {name, value} = e.target
    setUserCard({
      [name]: value
    })
  }

  const createDeck = (newDeck) => {
    axios.post('/decks', newDeck)
        .then(res => {
          setNewDeckId(res.data._id)
        })
        .catch(err => {
          console.log(err)
        })
    setUserCard(prev => {
      return ({
        ...prev,
        deckId: newDeckId
      })
    })
    setAddCardMode(!addCardMode)
    console.log(userCard)
  }

  const createCard = (newCard) => {
    axios.post('/flashcards', newCard)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
  }

  console.log(newDeckId)
  return (
    <div>
      <div>
        <div className='buttons'>
        {/* {addCardMode?<button onClick={()=>{createDeck(userDeck)}}>Prev</button>:''} */}
        {addDeckMode?<button onClick={()=>{createDeck(userDeck)}}>Next</button>:''}
        {addCardMode?<button onClick={()=>{createCard(userCard)}}>Next</button>:''}
      </div>
      <div className='deck-component'>
        {addCardMode?
        <button>backarrow</button>
        :
        ''
        }
        <div className='databox'>
          {addCardMode?
          <div className='new-deck-info'>
          <div>
          <h2>Build your card!</h2>
          <h2>Question</h2>
            <input type='text' 
              placeholder='...' 
              onChange={handleCardChange}
              name="question"
            >
            </input>
          <h2>Answer</h2>
            <input type='text' 
              placeholder='...' 
              onChange={handleCardChange}
              name="answer"
            >
            </input>
            </div>
        </div>
        :
        <div className='new-deck-info'>
            <div>
            <h2>Deck Title Name</h2>
              <input type='text' 
                placeholder='...' 
                onChange={handleDeckChange}
                name="title"
              >
              </input>
              </div>
          </div>
          }
        </div>
        {addCardMode?
        <button>forwardarrow</button>
        :
        ''
        }
      </div>
      </div>
    </div>
  )
}

export default AddDeck


{/* <div className='inputs-container'>  
        <input className = 'inputs' type = "text" placeholder='Category' />
        <input className = 'inputs' type = "text" placeholder='Question' />
        <input className = 'inputs' type = "text" placeholder='Answer' />
        </div> */}