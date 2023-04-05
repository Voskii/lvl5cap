import "./Review.css"
import React from 'react'
 

function UserReview({picture}) {
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
    <div className="carousel-slide" data-bs-ride="carousel">
    <div className="carousel-item active">
    <div className="card">
    <img src={reviews.picture} className=" w-100" alt={reviews.name} />
    <div className="card-body">
        <h5 className="card-title">{reviews.name}</h5>
        <p className="card-text">{reviews.review}</p>
        <h6 className = "user-ratings"><i className = 'fas fa-stars'>{reviews.stars}</i></h6>
    </div>
    </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
  
  </div>
  );
}
export default UserReview