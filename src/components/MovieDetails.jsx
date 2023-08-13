

import { Link, useParams, Outlet } from "react-router-dom";
import { movieDetails, searchImg } from "../API";
import { useEffect, useState, useCallback } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [image, setImage] = useState('');

    const infoMovies = useCallback(async () => {
        const result = await movieDetails(movieId)
        const info = result.data; 
        setMovie(info);
    }, [movieId]);

    const searchImage = useCallback(async () => {
        if (movie && movie.poster_path) {
            const img = await searchImg(movie.poster_path);
            setImage(img);
        }
    }, [movieId, movie]);

    useEffect(() => {
        infoMovies();
    }, [infoMovies]);

    useEffect(() => {
        searchImage();
    }, [searchImage]);

    return (
        <div>
            <h1>{movie.title}</h1>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Ranking</h2>
            <p>{movie.vote_average}</p>
            <div>
                {image !== '' && <img src={image.config.url} alt="" />}
            </div>
            <li>
                  <Link to="cast">Cast</Link>
            </li>
            <li>
                <Link to="reviews">Reviews</Link>
            </li>
            <Outlet />
       </div>
    )
}

export default MovieDetails;