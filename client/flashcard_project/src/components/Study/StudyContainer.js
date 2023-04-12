// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// //import Decks from '../Decks/Decks';
// //import Deck from '../Decks/Deck';
// //import Study from '../Study/Study';
// import StopWatch from "./StopWatch"
// import Timer from './Timer'
// import "./Study.css"
// import Decks from '../Decks/Decks';
// function StudyContainer() {
//   const [decks, setDecks] = useState([]);
//   const [selectedDeck, setSelectedDeck] = useState(false);
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios.get('/decks/')
//       .then(response => setDecks.title(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   useEffect(() => {
//     if (selectedDeck) {
//       axios.get(`/decks/${selectedDeck.id}/cards`)
//         .then(response => setCards(response.data))
//         .catch(error => console.log(error));
//     } else {
//       setCards([]);
//     }
//   }, [selectedDeck]);

//   function handleDeckChange(e){
//     setSelectedDeck(e.target.value)
// }

//   return (
//     <div className='study-container'>
//     <div className='timers-container'>
//     <StopWatch className= 'stopwatch-component'/>
//     <Timer className = "timer-component"/>
//     <div className='button-and-list-container'>
//     <div className='quiz-study-button-container'>
//     </div>
//     </div>
// </div> 
    
    
    
// <div className='question-list'>
// <select value={selectedDeck.title} onChange={handleDeckChange}>

// </select>
//     <div>
    
//         <h3><Decks title = {decks.title}/></h3>
//         <ul>
//             {cards.map(card => (
//                 <li key = {card.id}>
//                    <p> {card.question}</p>
//                    <p>{card.answer}</p>
//                 </li>
//             ))}
//         </ul>
        
//     </div>
    
// )}
// </div>  
// </div>
// )
// }

// export default StudyContainer;

import React, {useState, useEffect} from 'react'
import axios from 'axios'
 //import Decks from "../Decks/Decks"
// import Deck from "../Decks/Deck"
// import Study from "../Study/Study"
import Timer from "../Study/Timer"
import StopWatch from "../Study/StopWatch"
import Quiz from "./Quiz"
import "./Study.css"

function StudyContainer() {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('/decks')
      .then(response => setDecks(response.data))
      .catch(error => console.log(error));
  }, []);
  
  useEffect(() => {
    if (selectedDeck) {
      axios.get(`/flashcards/${selectedDeck._id}`)
        .then(response => setCards(response.data))
        .catch(error => console.log(error));
    } else {
      setCards([]);
    }
  }, [selectedDeck]);
    
  const [showQuiz, setShowQuiz] = useState(false);
  const [showStudy, setShowStudy] = useState(false);
  
  console.log(cards)
  return (
    <div>
    <div className='timers-section'>
      <Timer />
      <StopWatch />
    </div>
    <div>  
    <label htmlFor="deck-select">Select a deck:</label>
      <select id="deck-select" onChange={(e) => setSelectedDeck(decks.find(deck => deck._id === (e.target.value)))}>
        <option value=""></option>
        {decks.map(deck => 
          <option key={deck._id} value={deck._id}>{deck.title}</option>)}
      </select>

<div className="question-list">
<div>
    {showQuiz ? 
      cards.map((card, index) => <Quiz key = {index} showQuiz = {showQuiz} showStudy = {showStudy} data = {card} index = {index} cards = {cards} />
    
       ) : ( 

        ""
  )}
</div>


  
  
      <div className="button-container">
        <button onClick={() => setShowQuiz(!showQuiz)}>Start Quiz</button>
        <button onClick={() => setShowStudy(!showStudy)}>Study Cards</button>
      </div>
    </div>
  </div>
  </div>
);
}


export default StudyContainer

