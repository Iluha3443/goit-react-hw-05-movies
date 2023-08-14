import { useEffect, useState,useCallback } from "react";
import { searchMovies } from '../../API';
import { Link, useLocation, useSearchParams} from "react-router-dom";
import {ItemParent,Form,InputSearch,ButtonSearch,ListMoviesBest,ListMoviesChildren} from './Movies.styled'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const search = useCallback(() => {
        const searchName = searchParams.get('movie');
      if (searchName !== null && searchName !== '') {
            renderMovies(searchName);
        };
    }, [searchParams]);

    useEffect(() => {
        search();
    }, [search]);
    
    async function renderMovies(name) {
        const result = await searchMovies(name);
        const resultsSearch = result.data.results;
        setMovies(resultsSearch)
    }

      const handleFormSubmit = (evt) => {
          evt.preventDefault();
          evt.target.value !== '' ? setSearchParams({movie: evt.currentTarget.input.value}) : setSearchParams({});
    };
    
    return (
        <>
    <ItemParent>
    <Form onSubmit={handleFormSubmit} >
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






