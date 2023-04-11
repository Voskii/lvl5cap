import React, { useState } from 'react'
import axios from 'axios'
import './Card.css'

function Card(props) {
  const {data, index, cards, setCards} = props
  const [EditCard, setEditCard] = useState(false)
  const [userState, setUserState] = useState({
    question: data.question,
      answer: data.answer,
      deckId: data.deckId,
      cardId: data._id
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(`card change:`, e.target.value)
    setUserState(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const upDateCard = (updates, cardId) => {
    console.log(updates)
    axios.put(`/flashcards/${cardId}`, updates)
        .then(res => {
          setUserState(prev => ({
            ...prev,
            question: userState.question,
            answer: userState.answer
          }))
        })
        .catch(err => console.log(err))
    setEditCard(!EditCard)
  }
  // setCards(prev => prev.filter(card => card._id !== cardId))
  const delCard = (cardId) => {
    console.log(`ID of card DELETED:`, cardId)
      axios.delete(`/flashcards/${cardId}`)
        .then(res => {
            setCards(prev => prev.filter(card => card._id !== data._id))
            })
        .catch(err => console.log(err))
        
    }
  

  // const delDeck = (deckId) => {
  //   axios.delete(`/decks/${deckId}`)
  //       .then(res => {
  //           setDecks(prev => prev.filter(deck => deck._id !== deckId))
  //       })
        // .catch(err => console.log(err))

  console.log(data)
  return (
    <div className='flashcard'>
      {EditCard?
        <div>
          <button onClick={() => upDateCard(userState, data._id)}>Save</button>
          <input type='text' 
              placeholder={userState.question} 
              onChange={handleChange}
              name="question"
              value={userState.question}
            ></input>
          <input type='text' 
              placeholder={userState.answer} 
              onChange={handleChange}
              name="answer"
              value={userState.answer}
            ></input>
        </div>
      :
        <div>
          <div className='card-buttons tform'>
          <button onClick={() => setEditCard(!EditCard)}>Edit</button>
          <button onClick={() => delCard(userState.cardId)}>Delete</button>
          </div>
          <h2>Q:{userState.question}</h2>
          <h2>A:{userState.answer}</h2>
        </div>
      }
      
    </div>
  )
}

export default Card