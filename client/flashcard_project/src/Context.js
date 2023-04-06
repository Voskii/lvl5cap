import React, {createContext, useState} from "react";
import axios from "axios";


const DeckContext = createContext()

function DeckProvider(){
    const [decks, setDecks] = useState([])
    
    const getDecks = () =>{
        axios.get('/Deck')
          .then(res => setDecks(res.data))
          .catch(err => console.log(err.response.data.errMsg))
      }

      
  return (
    <DeckContext.Provider value={{
        decks,
        setDecks,
        getDecks
    }}>
        {/* {props.children} */}
    </DeckContext.Provider>
  )    
}

export {DeckProvider, DeckContext}