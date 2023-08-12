import { useEffect, useState } from "react";
import { searchMovies } from '../API';
import { Link } from "react-router-dom";


const Movies = () => {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        search()
    }, [movieName]);
   
    function search ()  {
        if (movieName !== '') {
            renderMovies(movieName);
        };
    }
    
    async function renderMovies (name) {
        const result = await searchMovies(name);
        const resultsSearch = result.data.results;
        setMovies(resultsSearch)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const nameMovies = e.currentTarget.input.value;
        setMovieName(nameMovies)
    };
    

    return (
        <>
    <div>
    <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
            <input type="text" name="input" />
        </label>
        <button type="submit">Search</button>
            </form>
            </div>

            <div>
                <ul>
                    {movies.map(mov => (
                        <li key={mov.id}>
                        <Link to={`${mov.id}`}>{mov.title}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>
            </>
);
}

export default Movies;