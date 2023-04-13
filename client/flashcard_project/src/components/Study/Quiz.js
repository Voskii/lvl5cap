// import React, {useState, useEffect} from 'react'
// import "./Study.css"

// function Quiz({ cards }) {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   const [answers, setAnswers] = useState([])
//   const [startTime, setStartTime] = useState(null)
//   const [endTime, setEndTime] = useState(null)

//   useEffect(() => {
//     setStartTime(Date.now())
//   }, [])

//   function handleAnswerSelect(answerIndex){
//     const newAnswers = [...answers]
//     newAnswers[currentQuestionIndex] = answerIndex
//     setAnswers(newAnswers)
//     if(currentQuestionIndex < cards.questions.length - 1){
//       setCurrentQuestionIndex(currentQuestionIndex + 1)
//     }else{
//       setEndTime(Date.now())
//     }
//   }

//   function calculateQuiz(){
//     let correctAnswers = 0
//     let incorrectAnswers = 0
//     answers.forEach((answer, index) =>{
//       if(answer === cards.questions[index].correctIndex){
//         correctAnswers ++
//       }else{
//         incorrectAnswers ++
//       }
//     })
//     const timeTakenToDoQuiz = (endTime - startTime) / 1000
//     return{
//       correctAnswers, 
//       incorrectAnswers, 
//       timeTakenToDoQuiz
//     }
//   }
//   const currentQuestion = cards.questions[currentQuestionIndex]
//   const resultsOfQuiz = endTime ? calculateQuiz() : null 
//   return (
//     <div>
//       {endTime ? (
//         <div>
//           <p>You got {resultsOfQuiz.correctAnswers} out of {cards.questions.length} questions correct!</p>
//           <p>It took you {resultsOfQuiz.timeTakenToDoQuiz} seconds to complete the quiz!</p>
//         </div>
//       ) : (
//         <div>
//         <h3>Question {currentQuestionIndex + 1 }</h3>
//           <p>{currentQuestion.text}</p>
//           <ul>
//             {currentQuestion.answers.map((answer, index) => {
//               return(
//               <li key = {index} >
//                 <button onClick = {() => handleAnswerSelect(index)}>{answer}</button>
//               </li>
//               )
//             })}
//           </ul>
//           </div>
//       )}
//     </div>
//   )
// }


// export default Quiz


import React, { useState } from 'react';
import Card from '../Card/Card';

function Quiz(props) {
  const { cards, data } = props;
  const [cardIndex, setCardIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  

  const handleNextCard = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setShowAnswer(false);
    if (cardIndex + 1 < cards.length) {
      setCardIndex(cardIndex + 1);
    }
  };

  return (
    <div className='quiz-component'>
      {cardIndex + 1 <= cards.length ? (
        <div>
          <h3>Card {cardIndex + 1} of {cards.length}</h3>

          <Card className = "card-component-quiz" card={cards[cardIndex]} data = {data} showAnswer={showAnswer}  isQuizComp={true} />
          {!showAnswer && <button className='answer-quiz-button' onClick={() => setShowAnswer(true)}>Show Answer</button>}


          {showAnswer && (
            <div className='correct-and-incorrect'>
              <button className='correct' onClick={() => handleNextCard(true)}>Correct</button>
              <button className='incorrect' onClick={() => handleNextCard(false)}>Incorrect</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>Quiz Results</h3>
          <p>Correct answers: {correctAnswers}</p>
          <p>Incorrect answers: {cards.length - correctAnswers}</p>
        </div>
      )}
    </div>
  );
}

export default Quiz;