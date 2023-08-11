import { useEffect, useState } from 'react';
import requestMovies from '../API';
import MovieDetails from '../components/MovieDetails';


const Home = () => {
    const [movies, setMovies] = useState([]);

   
    useEffect(() => {
        bestMovies()
    }, [])

    async function bestMovies() {
        const movies = await requestMovies();
        const bestFilms = movies.data.results;
        setMovies(bestFilms);
    }
    console.log(movies)
    
    return (
        <div>
            <h1>Trending today</h1>
            <ul>
                {movies.map((film) => (
                    <MovieDetails key={film.id} film={film} />
                ))}
            </ul>
        </div>
    );
};

export default Home;