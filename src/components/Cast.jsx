import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getActorsFilm} from "../API"

const imgLink = 'https://image.tmdb.org/t/p/w200';
    
function Cast() {
    const params = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        getActorsFilm(params.movieId).then((data) => {
            setCast(data.cast)
        }).catch(err => console.error(err));
    }, [params.movieId]);

    return (cast.length > 0 ? <div>
        {cast.map((actor) => {
            return <div key={actor.id}>
                {actor.profile_path
                    ? <img src={`${imgLink}${actor.profile_path}`} alt={actor.original_name} />
                    : <div>Sorry we don't have this picture</div>}
                <div>{actor.original_name}</div>
                <div>role: {actor.character}</div>
        </div>})}
    </div> : <div>We don't have any cast information for this movie</div>);
}

export default Cast;