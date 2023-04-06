
import React, { useState, useEffect } from "react"
import AddCard from "../AddCard/AddCard"
import "./AddDeck.css"
import "../AddCard/AddCard.css"


function AddDeck(props) {
  // const {addDeckMode, setAddDeckMode} = props
  const [userDeck, setUserDeck] = useState('') 
  const [addCardMode, setAddCardMode] = useState(false)


  const nextStep = () => {
    
  }

  const handleChange = (e) => {
   console.log(e.target.value)
    setUserDeck({
      title: e.target.value,
      flashcards: 0
    })
  }
  console.log(addCardMode)
  return (
    <div>
      <div>
        <div className='buttons'>
        {addCardMode?<button onClick={()=>{setAddCardMode(!addCardMode)}}>Prev</button>:''}
        <button onClick={()=>{setAddCardMode(!addCardMode)}}>Next</button>
      </div>
      <div className='deck-component'>
        <button>backarrow</button>
        <div className='databox'>
          <div className='new-deck-info'>
            {addCardMode?
              <div>
                {/* <AddCard /> */}
              </div>
              
            :
            <div>
            <h2>Deck Title Name</h2>
              <input type='text' 
                placeholder='...' 
                onChange={handleChange}
                name="title"
              >
              </input>
              </div>
            }
          </div>
        </div>
        <button>forwardarrow</button>
      </div>
      </div>
    </div>
      
  )
}

export default AddDeck


{/* <div className='inputs-container'>  
        <input className = 'inputs' type = "text" placeholder='Category' />
        <input className = 'inputs' type = "text" placeholder='Question' />
        <input className = 'inputs' type = "text" placeholder='Answer' />
        </div> */}