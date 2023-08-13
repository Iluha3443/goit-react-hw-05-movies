import { useEffect, useState } from "react";
import { getReviews } from "API";
import { useParams } from "react-router-dom";
import {ReviewsContainer} from './Reviews.styled'

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews,setReviews] = useState([])

    useEffect(() => {
        getReviews(movieId).then(data => setReviews(data.data.results))
      .catch(error => console.log(error))
    },[movieId])

   return (
        <ReviewsContainer>
            {reviews.length !== 0 ? (
                reviews.map(rev => (
                    <div className="review" key={rev.id}>
                        <h3>Author: {rev.author}</h3>
                        <p>{rev.content}</p>
                    </div>
                ))
            ) : (
                <div className="no-reviews">No reviews available</div>
            )}
        </ReviewsContainer>
    );
}


export default Reviews;