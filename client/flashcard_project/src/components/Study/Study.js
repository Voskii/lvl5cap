import React, {useState, useEffect}  from 'react'
import StopWatch from "./StopWatch"
import Timer from './Timer'
import axios from 'axios'


function Study() {
    const [deckList, setDeckList] = useState([])
    
    useEffect(() => {
        axios.get(`api/deck`)
          .then(response => {
            setDeckList(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
      console.log(deckList)
    return (
    <div>
        <div className='timers-container'>
            <StopWatch className= 'stopwatch-component'/>
            <Timer className = "timer-component"/>
        </div>   
        <div className='question-list'>
        {deckList}
        </div>  
    </div>
  )
}

export default Study
