import React from 'react'
import {Route, Routes } from 'react-router-dom'
import "./App.css"
import Home from './components/Home/Home'
import AddDeck from './components/AddDeck/AddDeck'
import Decks from './components/Decks/Decks'
function App() {

  return(
    <div className='App'>
        <Routes className = "routes">
      <Route index path = "/" element = {<Home />} />
      <Route path = "/create" element = {<AddDeck/>} />
      <Route path = "/study" element = {<Decks />} />
    </Routes>
    </div>
  )
}




export default App