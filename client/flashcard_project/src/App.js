import React from 'react'
import {Routes, Route} from 'react-router-dom'
import "./App.css"
import Footer from './components/Footer/Footer'
import StudyContainer from './components/Study/StudyContainer'
import Home from './components/Home/Home'
import Decks from './components/Decks/Decks'
import Navbar from './components/Navbar/Navbar'

function App() {

  return(
    <div className='App'>
      <Navbar />
      <Routes className = "routes">
        <Route index path = "/" element = {<Home />} />
        <Route path = "/decks" element = {<Decks />} />
        <Route path = "/study" element = {<StudyContainer />} />
      </Routes>
      <Footer />
    </div>
  )
}




export default App