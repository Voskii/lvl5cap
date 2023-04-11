import React from "react";
import "./Footer.css"
function Footer() {
  return (
    <footer>

    <div className = "logo-image-container">
              </div>
              <div className="footer-links">
  <div className='footer-links-left'>
    <div className="bar"></div>  
  <hr />
    <button className="footer-button" disabled  href= "#">Terms of Use</button>
    <button className="footer-button" disabled  href= "#">Contact</button>
    <button className="footer-button" disabled  href= "#">Privacy Policy</button>
    
  
    </div>
    <div className="footer-links-right">
    <div className="bar"></div>
    <hr />
    <button className="footer-button" disabled  href= "#">Careers</button>
    <button className="footer-button" disabled href = "#">Support</button>
    <button className="footer-button" disabled href = "#">Community Guidelines</button>
    </div>
    </div>
    </footer>
  )
}

export default Footer
