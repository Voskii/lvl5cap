
import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./AddDeck.css"
import Footer from "../Footer/Footer.js"
function AddDeck() {
  return (
    <>
      <Navbar />
      <h1>Create a New Deck of FlashCards</h1>
        <div className='inputs-container'>  
        <input className = 'inputs' type = "text" placeholder='Category' />
        <input className = 'inputs' type = "text" placeholder='Question' />
        <input className = 'inputs' type = "text" placeholder='Answer' />
        </div>
        <Footer />
    </>
  )
}

export default AddDeck