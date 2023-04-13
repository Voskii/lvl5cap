import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Card.css'

function Card(props) {
  const {data, index, cards, setCards, setShowCard, showCard, showAnswer, showQuiz, showStudy, deckVisible, isQuizComp} = props
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
  
  const delCard = (cardId) => {
    console.log(`ID of card DELETED:`, cardId)
      axios.delete(`/flashcards/${cardId}`)
        .then(res => {
            setCards(prev => prev.filter(card =>  card._id !== cardId))
            console.log('cards filter', cards.filter(card => card._id !== cardId))
            })
        // axios.get('/decks')
        // .then(res => setCards(res.data))
        .catch(err => console.log(err))
        setShowCard(!showCard)
    }
  
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
        <div className='card-buttons '>
          <div>
            <div className='card-buttons tform'>
              <div>
                {deckVisible?
                  <div>
                    <button onClick={() => setEditCard(!EditCard)}>Edit</button>
                    <button onClick={() => delCard(userState.cardId)}>Delete</button>
                  </div>
                :
                ''
                }
              </div>
            </div>
            <h2>Q:{userState.question}</h2>
            {deckVisible?<h2>A:{userState.answer}</h2>:''}
            {isQuizComp && showAnswer?<h2>A:{data.answer}</h2>:''}
            {!isQuizComp && showAnswer?<h2>A:{data.answer}</h2>:''}
          </div>
        </div>
      }
    </div>
  )
}

export default Card