import { useEffect, useState } from 'react';
import {getTranding} from '../API';
import { Link } from "react-router-dom";


const Home = () => {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        bestMovies()
    }, []);

    async function bestMovies() {
        const movies = await getTranding();
        const bestFilms = movies.data.results;
        setMovies(bestFilms);
    };
    
    
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movies.map((mov) => (
                    <li key={mov.id}>
                        <Link to={`movies/${mov.id}`}>{mov.title}</Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default Home;
