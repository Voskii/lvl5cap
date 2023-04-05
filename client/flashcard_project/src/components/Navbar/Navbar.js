import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className ='navigation-routes'>
      <button className = "button-routes" onClick = {() => navigate("/")}>Go to the Home Page</button>
      <button className = "button-routes" onClick={() => navigate("/create")}>Create your perfect Study Buddy</button>
      <button className = "button-routes" onClick = {() => navigate("/study")}>Practice for Perfect</button>
      </div>
    </div>
  )
}

export default Navbar