import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {movieCredits,searchImg} from "../API"

const Cast = () => {
    const { movieId } = useParams();
    const [cust, setCust] = useState([]);
    const [img, setImg] = useState('');
 console.log(cust)
    useEffect(() => {
        castMovies();
        if(cust  )
        searchImg()
    }, []);
  
   async function castMovies() {
       const result = await movieCredits(movieId);
       const resultCust = result.data.cast;
       setCust(resultCust);
    }

    return (
        <div>{cust.map(cust => (
            <div>
            <li key={cust.id}>{cust.original_name}</li>
            {/* <img src={cust.profile_path} alt="" /> */}
            </div>
        ))}</div>
)
}

export default Cast;