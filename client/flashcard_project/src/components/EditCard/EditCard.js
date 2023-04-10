import React, { useState, useEffect } from "react"

function EditCard(props) {
  
  // const [userCard, setCardDeck] = useState('') 
  console.log(`EditCard component rendered`)
  
  return (
    <div>
      <div className='deck-component'>
        <button>backarrow</button>
        <div className='databox'>
          <div className='new-deck-info'>
            <h2>Question</h2>
            <input type='text' placeholder='...'></input>
            <h2>Answer</h2>
          </div>
        </div>
        <button>forwardarrow</button>
      </div>
    </div>
  )
}

export default EditCard()