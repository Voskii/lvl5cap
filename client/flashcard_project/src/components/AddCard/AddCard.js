
import React from 'react'
function AddCard(){

  return (
    <div>
    <h1>Flash Card Form Component</h1>
        <div className="form-inputs">
        <input type="file" placeholder="Optional Image" />
      <input className='cardForm-question' type= 'text' min={10} placeholder = "Question"/>
      <input className="cardForm-answer" type = 'text' placeholder="Answer"/>
      
      </div>
    </div>
  )
}

export default AddCard