import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Study from "../Study/Study"
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

  const swapQuizState = () => {
    setShowStudy(false)
    setShowQuiz(!showQuiz)
  }

  const swapStudyState = () => {
    setShowQuiz(false)
    setShowStudy(!showStudy)
  }

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
    {!showStudy && showQuiz?
      cards.map((card, index) => <Quiz key = {index} showQuiz = {showQuiz} data = {card} index = {index} cards = {cards} />) 
    :  
    !showQuiz && showStudy?
      cards.map((card, index) => <Study key = {index} showStudy = {showStudy} data = {card} index = {index} cards = {cards} />) 
    :
      ''
  }
</div>
      <div className="button-container">
        <button onClick={() => swapQuizState()}>Start Quiz</button>
        <button onClick={() => swapStudyState()}>Study Cards</button>
      </div>
    </div>
  </div>
  </div>
);
}


export default StudyContainer

