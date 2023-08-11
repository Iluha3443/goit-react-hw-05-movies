import { Link } from "react-router-dom";

const MovieDetails = ({film}) => {
 
    return (
        <>
            <Link to={`${film.id}`}>{film.title}</Link>
       </>
    )
}

export default MovieDetails;