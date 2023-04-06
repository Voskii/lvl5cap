
//Home page
import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import Footer from '../Footer/Footer'
import UserReview from '../Carousel/UserReview'



function Home() {

  return (
    <>
    <header className='head-container'>
    </header>
    <main>
    <h1>About us</h1>
    <p className='about-us-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nec ullamcorper sit amet risus. Elementum tempus egestas sed sed risus pretium. Senectus et netus et malesuada fames ac turpis egestas. Consequat interdum varius sit amet. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Ultricies leo integer malesuada nunc vel. Quam adipiscing vitae proin sagittis nisl rhoncus. Enim sed faucibus turpis in eu mi. Elit at imperdiet dui accumsan sit amet nulla facilisi. Risus feugiat in ante metus dictum at. Lacinia quis vel eros donec ac odio tempor orci.

    Amet tellus cras adipiscing enim eu turpis. Massa sapien faucibus et molestie ac feugiat. Id porta nibh venenatis cras sed felis eget. Rhoncus aenean vel elit scelerisque. Eu non diam phasellus vestibulum lorem sed risus. Aenean sed adipiscing diam donec adipiscing. Mauris cursus mattis molestie a iaculis. Sit amet consectetur adipiscing elit pellentesque habitant. Duis at tellus at urna condimentum mattis pellentesque. Placerat duis ultricies lacus sed turpis tincidunt. Tristique senectus et netus et malesuada. Cursus in hac habitasse platea dictumst quisque sagittis purus sit.
    
    Orci a scelerisque purus semper. A scelerisque purus semper eget duis at tellus at urna. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Aenean pharetra magna ac placerat vestibulum lectus. Mattis aliquam faucibus purus in massa tempor nec feugiat. Mollis aliquam ut porttitor leo a diam sollicitudin. Nam libero justo laoreet sit amet cursus sit. Amet purus gravida quis blandit turpis cursus in hac. Sit amet volutpat consequat mauris nunc congue nisi vitae. Ultricies leo integer malesuada nunc vel risus commodo. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Eget felis eget nunc lobortis mattis aliquam. Sed turpis tincidunt id aliquet. Aliquam id diam maecenas ultricies. Risus nec feugiat in fermentum posuere urna nec tincidunt. In arcu cursus euismod quis viverra. Auctor augue mauris augue neque gravida in. Id ornare arcu odio ut sem nulla. Sagittis orci a scelerisque purus semper eget duis.</p>
    <br />
    <div className='links-outside-image'>
      <div className = 'study-habits-image'/>
        <div className='list-container'>
          <ul className='list'>Need to Improve your Study Habits??
              <li className='listItem'><a href='https://psychcentral.com/health/highly-effective-study-habits'>PsychCentral.com</a></li>
              <li className='listItem'><a href='https://pennstatelearning.psu.edu/study-habits'>Penn State Learning</a></li>
              <li className='listItem'><a href='https://www.oxfordlearning.com/how-to-study-effectively/'>Oxford Learning</a></li>
              <li className='listItem'><a href='https://www.thoughtco.com/great-study-habits-1857550'>ThoughtCo.</a></li>
              <li className='listItem'><a href='https://www.usa.edu/blog/study-techniques/'>University of St. Augustine for Health Sciences</a></li>
              <li className='listItem'><a href='https://thecollegepost.com/online-study-tools/'>The College Post</a></li>
          
          </ul>
      
        </div>
        <div></div>
        
    </div>
    <h4>HOW TO USE STUDY BUDDY</h4>
    </main>
    <div className='test'>
      <UserReview />
    </div>
    <Footer />
      </>
  )
}

export default Home

