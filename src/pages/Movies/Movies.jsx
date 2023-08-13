import { useEffect, useState,useCallback } from "react";
import { searchMovies } from '../../API';
import { Link, useLocation} from "react-router-dom";
import {ItemParent,Form,InputSearch,ButtonSearch,ListMoviesBest,ListMoviesChildren} from './Movies.styled'

const Movies = () => {
    const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);
    const location = useLocation()
    
   const search = useCallback(() => {
        if (movieName !== '') {
            renderMovies(movieName);
        };
    }, [movieName]);

    useEffect(() => {
        search();
    }, [search]);
    
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
    <ItemParent>
    <Form onSubmit={handleFormSubmit}>
        <label htmlFor="">
            <InputSearch type="text" name="input" />
        </label>
        <ButtonSearch type="submit">Search</ButtonSearch>
            </Form>
            </ItemParent>

            <div>
                <ListMoviesBest>
                    {movies.map(mov => (
                        <ListMoviesChildren key={mov.id}>
                        <Link to={`${mov.id}`} state={{from: location}}>{mov.title}</Link>
                        </ListMoviesChildren>
                        
                    ))}
                </ListMoviesBest>
            </div>
            </>
);
}

export default Movies;