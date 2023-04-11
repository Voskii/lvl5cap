import React, {useState, useEffect} from 'react'
import "./Study.css"
function Quiz(props) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState([])
  const [startTime, setStartTime] = useState(null)
  const [endTime, setEndTime] = useState(null)

  useEffect(() => {
    setStartTime(Date.now())
  }, [])

  function handleAnswerSelect(answerIndex){
    const newAnswers = [...answers]
    newAnswers[currentQuestionIndex] = answerIndex
    setAnswers(newAnswers)
    if(currentQuestionIndex < props.questions.length - 1){
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }else{
      setEndTime(Date.now())
    }
  }

  function calculateQuiz(){
    let correctAnswers = 0
    let incorrectAnswers = 0
    answers.forEach((answer, index) =>{
      if(answer === props.questions[index].correctIndex){
        correctAnswers ++
      }else{
        incorrectAnswers ++
      }
    })
    const timeTakenToDoQuiz = (endTime - startTime) / 1000
    return{
      correctAnswers, 
      incorrectAnswers, 
      timeTakenToDoQuiz
    }
  }
  const currentQuestion = props.questions[currentQuestionIndex]
  const resultsOfQuiz = endTime ? calculateQuiz() : null 
  return (
    <div>
      {endTime ? (
        <div>
          <p>You got {resultsOfQuiz.correctAnswers} out of {props.questions.length} questions correct!</p>
          <p>It took you {resultsOfQuiz.timeTakenToDoQuiz} seconds to complete the quiz!</p>
        </div>
      ) : (
        <div>
        <h3>Question {currentQuestionIndex + 1 }</h3>
          <p>{currentQuestion.text}</p>
          <ul>
            {currentQuestion.answers.map((answer, index) => {
              return(
              <li key = {index} >
                <button onClick = {() => handleAnswerSelect(index)}>{answer}</button>
              </li>
              )
            })}
          </ul>
          </div>
      )}
    </div>
  )
}

export default Quiz
