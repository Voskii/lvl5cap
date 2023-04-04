import React from 'react'
// import Card from '../Card/Card'
import Navbar from '../Navbar/Navbar'
import './Decks.css'
export default function Decks() {
  return (
    <>
    <Navbar />
    <div className='card-grid'>

      <h1>Decks Component</h1>
      <div className='decks-container'>
  <div className='deck'>

  <h2>Deck Title</h2></div>
  <div className='deck'>

  <h2>Deck Title</h2></div>
  <div className='deck'>

  <h2>Deck Title</h2></div>
  <div className='deck'>

  <h2>Deck Title</h2></div>
  <div className='deck'>

  <h2>Deck Title</h2></div>
  <div className='deck'>

  <h2>Deck Title</h2></div>
  </div>
        {/* Loops thorough the cards with a .map function after choosing which Deck they would like to study with */}
    </div>
    </>
  )
}