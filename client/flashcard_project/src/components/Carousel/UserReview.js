import "./Review.css"
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'

function UserReview({name, picture, review, stars}) {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      picture: "https://avatars.githubusercontent.com/u/99751482?s=96&v=4",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 4,
    },
    {
      id: 2,
      name: "Jane Doe",
      picture: "https://avatars.githubusercontent.com/u/110045280?v=4",
      review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: 5,
    },
    {
      id: 3, 
      name: "John Doe",
      picture:  "https://avatars.githubusercontent.com/u/96928708?v=4",
      review:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 5
  
    }
  ]
  


return (
  <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={60}
        totalSlides={3}
      children
      className="carousel-container"
      visibleSlides={2}
      isPlaying={true}
      infinite={true}
      interval={2000}
  >
    <Slider className= "slider-carousel">
      {reviews.map((data , index) => 
        (<Slide index={index} data={data} key={index} className="slide-carousel">
          <div className="card">
          <img src={data.picture} className=" w-100" alt={index.name} />
          <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">{data.review}</p>
              <h6 className = "user-ratings">{data.stars}<i className = 'fas fa-stars'></i></h6>
          </div>
          </div>
        </Slide>))
        }
    </Slider>
      <ButtonBack className="carouselButt">Prev.
      </ButtonBack>
      <ButtonNext className="carouselButt">Next
      </ButtonNext>
  </CarouselProvider>
  );
}
export default UserReview