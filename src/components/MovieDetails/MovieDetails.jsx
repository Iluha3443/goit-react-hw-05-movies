import {Ranking,Overview,MovieTitle,MovieDetailsContainer,MovieOverview,MovieImage,ItemImage} from './MovieDetails.styled'
import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { movieDetails, searchImg } from "../../API";
import { useEffect, useState, useCallback, useRef,Suspense } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);
    const [image, setImage] = useState('');
    const location = useLocation();
    const backLinkLocatoinRef = useRef(location.state?.from ?? '/');

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
    }, [ movie]);

    useEffect(() => {
        infoMovies();
    }, [infoMovies]);

    useEffect(() => {
        searchImage();
    }, [searchImage]);

    return (
       <MovieDetailsContainer>
            <Link to={backLinkLocatoinRef.current}>Go back</Link>
            
            <MovieOverview>
                <ItemImage>
                    {image !== '' && <MovieImage src={image.config.url} alt="" />}
                </ItemImage>
                <div>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <Overview>Overview</Overview>
                    <p>{movie.overview}</p>
                    <Ranking>Ranking</Ranking>
                    <p>{movie.vote_average}</p>
                </div>
            </MovieOverview>
            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </MovieDetailsContainer>
    )
}

export default MovieDetails;