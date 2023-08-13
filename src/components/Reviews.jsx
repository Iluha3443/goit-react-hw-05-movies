import { useEffect, useState } from "react";
import { getReviews } from "API";
import { useParams } from "react-router-dom";

const Reviews = () => {
    const {movieId} = useParams();
    const [reviews,setReviews] = useState([])

    useEffect(() => {
        getReviews(movieId).then(data => setReviews(data.data.results))
      .catch(error => console.log(error))
    },[movieId])

    return (
        <>
        
            {reviews.length !== 0 && reviews.map(rev => (
                <div>
                <div>Author:{rev.author}</div>
                  <p>{rev.content}</p>
                </div>
            )) 
            
        }
    </>
)
}

export default Reviews;