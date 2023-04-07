import React from 'react'
import {FaStopwatch, FaEdit } from "react-icons/fa"
import "./Explanation.css"
import {FiDelete, FiNavigation} from "react-icons/fi"
import {BiBookAdd} from "react-icons/bi"
function Explanation() {
  return (
    <div className='explanation-container'>
    <div className='section-1'>
        <div className='container-image-1'>
        <BiBookAdd className='book-add'/>
        </div>
        <h4 className='section-1-text'>Add New Decks for your flashcards,
        <br /> and categorize them how you see fit!</h4>
         
        </div>
        <hr />
        <div className='section-2'>
        <div className='container-image-2'>
        <FiNavigation className='navigation-icon'/>
        </div>
        <h4 className='section-2-text'>Contains Easily traversible pages,
        <br />
        to make your study session more about the goal   <br/> and less about the journey.
       
        </h4>
         
        </div>
        <hr />
        <div className='section-3'>
        <div className='container-image-3'><FaEdit className= 'edit-icon' /><FiDelete className='delete-icon'/></div>
        <h4 className='section-3-text'>Edit, and Delete Cards in your Study Deck.
        <br />
          
        </h4>
         
        </div>
        <hr />
        <div className='section-4'>
        <div className='container-image-4'> <FaStopwatch className='stop-watch'/> </div>
        <h4 className='section-3-text'>Time yourself in the Quiz Section, using our Count Up and Count Down timers 
        <br />
          
        </h4>
         
        </div>
        <hr />
          <div>
        
        </div>
    </div>
  )
}

export default Explanation
