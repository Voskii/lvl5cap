
import React, { useState, useEffect } from "react"
import axios from "axios"
import EditCard from "../EditCard/EditCard"
import "./AddDeck.css"
import "../EditCard/EditCard.css"


function AddDeck(props) {
  const {addDeckMode, setAddDeckMode, setUserDeck, userDeck, addCardMode, setAddCardMode, userCard, setUserCard, getDecks}  = props
  const [newDeckId, setNewDeckId] = useState('')
  const [cards, setCards] = useState([])


  const backOut = (arr) => {
    //POST CARDS BY ARRAY - NOT WORKING
    // axios.post('/flashcards', arr)
    //     .then(res => {
    //       console.log(`inside create card result:`, res)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    getDecks()
    console.log(`create card func cards state:`, cards)
    setAddCardMode(!addCardMode)
    setAddDeckMode(!addDeckMode)
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
    console.log(`card change:`, e.target.question, e.target.answer)
    setUserCard(prev => ({
      ...prev,
      [name]: value
    }))

  }

  const createDeck = (newDeck) => {
    console.log(newDeck)
    if(newDeck.title){
      axios.post('/decks', newDeck)
        .then(res => {
          console.log(`looking for result to be an ID:`, res.data)
          setNewDeckId(res.data)
          setUserCard(prev => {
            return ({
              ...prev,
              deckId: res.data
          })  
        })
        })
        .catch(err => {
          console.log(err)
        })
    
    setAddCardMode(!addCardMode)
    console.log(`should have deck ID:`, userCard)
    }
    
  }

  const createCard = (card) => {
    if(card.question && card.answer){
      setCards(prev => ([
      ...prev,
      {
        question: card.question,
        answer: card.answer,
        deckId: newDeckId
      }
    ]))
    axios.post('/flashcards', card)
        .then(res => {
          console.log(`inside create card result:`, res)
        })
        .catch(err => {
          console.log(err)
        })
    setUserCard(prev => {
      return ({
        question: '',
        answer: '',
        deckId: newDeckId
      })  
    })
    }
  }

  console.log(`cards state before render:`, cards)
  console.log(`userCard should have ID:`, userCard)
  console.log(newDeckId)
  return (
    <div>
      <div className="page2-body">
        <div className='buttons'>
        {/* {addCardMode?<button onClick={()=>{createDeck(userDeck)}}>Prev</button>:''} */}
        {addDeckMode && !addCardMode?<button onClick={()=>{createDeck(userDeck)}}>Next</button>:''}
        {addCardMode?<button onClick={()=>{createCard(userCard)}}>Create Card</button>:''}
      </div>
      <div className='deck-component'>
        {/* {addCardMode?
        <button>backarrow</button>
        :
        ''
        } */}
        <div className={addCardMode? 'databox2': 'databox'}>
          {addCardMode?
          <div className='new-deck-info'>
          <div>
          <h2>Build your card!</h2>
          <h2>Question</h2>
            <input type='text' 
              placeholder='...' 
              onChange={handleCardChange}
              name="question"
              value={userCard.question}
              maxlength="55"
            >
            </input>
          <h2>Answer</h2>
            <input type='text' 
              placeholder='...' 
              onChange={handleCardChange}
              name="answer"
              value={userCard.answer}
              maxlength="55"
            >
            </input>
            <button onClick={()=>{backOut(cards)}} className="new-deck-info finish-butt">Finish & Exit</button>
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
        {/* {addCardMode?
        <button>forwardarrow</button>
        :
        ''
        } */}
      </div>
      </div>
    </div>
  )
}

export default AddDeck