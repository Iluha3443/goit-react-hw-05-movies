import { useEffect, useState } from 'react';
import {getTranding} from '../../API';
import { Link } from "react-router-dom";
import {TitleTrending,ListMoviesBest,ListMoviesChildren} from './Home.styled'

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
            <TitleTrending>Trending today</TitleTrending>
            <ListMoviesBest>
                {movies.map((mov) => (
                    <ListMoviesChildren key={mov.id}>
                        <Link to={`movies/${mov.id}`}>{mov.title}</Link>
                    </ListMoviesChildren>
                    
                ))}
            </ListMoviesBest>
        </div>
    );
};

export default Home;
