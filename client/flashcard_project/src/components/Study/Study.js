import React, {useState, useEffect}  from 'react'
import StopWatch from "./StopWatch"
import Timer from './Timer'
import axios from 'axios'
import Quiz from "./Quiz"
// import { DeckContext } from '../../Context'



function Study() {
    const [getDecks, setGetDecks] = useState([])
    const [selectedDeck, setSelectedDeck] = useState("")
    const [cards, setCards] = useState([])
    // const { getDecks } = useContext(DeckContext)

    
    
    // const data = [

    // {
    //         question: "alskjdflakjsdf;lakjsdf", 
    //     answer: "askdhfkasjfhlkajsdf", 
    //     _id: "1"
    // }, 
    // {
    //         question: "kajshdfkljahsdklfjhalksdhf", 
    //         answer: "fkajfdkjashdlf", 
    //         _id: "2"    
    // }
    // ]


        useEffect(() => {
            axios.get('/decks')
            .then(res => {
                setGetDecks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }, [])

        useEffect(() => {
            if(selectedDeck){
                axios.get(`/decks/${setSelectedDeck}/cards`)
                .then(res =>{
                    setCards(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
            }
        }, [selectedDeck])

        function handleDeckChange(e){
            setSelectedDeck(e.target.value)
        }
        function handleQuiz(){
            console.log("button clicked")
            return(
                <Quiz />
          
            )
        }

    return (
    <div className='study'>
        <div className='timers-container'>
            <StopWatch className= 'stopwatch-component'/>
            <Timer className = "timer-component"/>
        </div> 
        
        <div className='button-and-list-container'>
        <div className='quiz-study-button-container'>
        <button onClick = {handleQuiz} className='quiz-button'>Quiz</button>  
        <button className='study-button'>Study</button>
        </div>
        <div className='question-list'>
            <select value={selectedDeck} onChange={handleDeckChange}>
                <option value = "">Select a deck</option>
                {getDecks.map(deck => (
                    <option key = {deck.id} value = {deck.id}>{deck.name}</option>
                ))}
            </select>
            {cards.length > 0 && (
                <div>
                
                    <h3>{cards[0].deckName}</h3>
                    <ul>
                        {cards.map(card => (
                            <li key = {card.id}>
                               <p> {card.question}</p>
                               <p>{card.answer}</p>
                            </li>
                        ))}
                    </ul>
                    
                </div>
                
            )}
        </div>  
        </div>
    </div>
    
  )
}

export default Study

