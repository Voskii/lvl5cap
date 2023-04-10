import React from 'react'
import './Card.css'

function Card(props) {
  const {data, index} = props
  return (
    <div className='flashcard'>
      <h1>{data.question}</h1>
      <h1>{data.answer}</h1>
    </div>
  )
}

export default Card