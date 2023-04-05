import "./Review.css"
import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

function UserReview({name, picture, review, stars}) {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      picture: "https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 4,
    },
    {
      id: 2,
      name: "Jane Doe",
      picture: "https://tse4.mm.bing.net/th?id=OIP.0A1RSeVHV4YfoDGR2jUvHwHaHa&pid=Api&P=0",
      review: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      stars: 5,
    },
    {
      id: 3, 
      name: "John Doe",
      picture:  "https://tse4.mm.bing.net/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&pid=Api&P=0",
      review:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      stars: 5
  
    }
  ]
  


return (
  <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={70}
        totalSlides={3}
  orientation="horizontal"
      children
      className="carousel-container"
      visibleSlides={1}
      isPlaying={true}
      
      infinite={true}
      interval={2000}
  >
    <Slider className= "slider-carousel">
      {reviews.map((data , index) => (
        <Slide index = {index} data = {data} key = {index} className="slide-carousel">
        <div className="card">
        <img src={data.picture} className=" w-100" alt={index.name} />
        <div className="card-body">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">{data.review}</p>
            <h6 className = "user-ratings">{data.stars}<i className = 'fas fa-stars'></i></h6>
        </div>
        </div>
     </Slide> 
     ))}
    </Slider>
      <ButtonBack className="carouselButt">Prev.
      </ButtonBack>
      <ButtonNext className="carouselButt">Next
      </ButtonNext>
  </CarouselProvider>
  );
}
export default UserReview