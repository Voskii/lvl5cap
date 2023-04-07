// import React, { useState, useEffect } from "react"



function AddCard() {
  // const [userCard, setCardDeck] = useState('') 
  return (
    <div>
      <div className='buttons'>
        <button>Back 2 Decks</button>
        <button>Edit Card</button>
      </div>
      <div className='deck-component'>
        <button>backarrow</button>
        <div className='databox'>
          <div className='new-deck-info'>
            <h2>Deck Title Name</h2>
            <input type='text' placeholder='...'></input>
          </div>
        </div>
        <button>forwardarrow</button>
      </div>
    </div>
  )
}

export default AddCard()