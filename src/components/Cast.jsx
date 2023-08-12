import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {movieCredits,searchImg} from "../API"

const Cast = () => {
    const { movieId } = useParams();
    const [cust, setCust] = useState([]);
    const [img, setImg] = useState('');
   
    
    useEffect(() => {
        castMovies()
    }, []);

    useEffect(() => {
        if (cust.length !== 0) {
            imgMovies();
        }
    }, [cust]);

     


    async function imgMovies() {
       const imagePaths = cust.map(res => res.profile_path);
    const imgPromises = imagePaths.map(async path => await searchImg(path));
        const imgResults = await Promise.all(imgPromises);
    setImg(imgResults);
    }

   async function castMovies() {
       const result = await movieCredits(movieId);
       const resultCust = result.data.cast;

       setCust(resultCust);
    //    console.log(resultCust)
    }

    return (
        <div>{cust.map(cust => (
            
             <li key={cust.id}>{cust.original_name}</li>
        ))}</div>
)
}

export default Cast;
 {/* <img src={cust.profile_path} alt="" /> */}