import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActorsFilm } from "../../API";
import {CastContainer} from './Cast.styled'

const imgLink = 'https://image.tmdb.org/t/p/w200';
    
function Cast() {
    const params = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        getActorsFilm(params.movieId).then((data) => {
            setCast(data.cast)
        }).catch(err => console.error(err));
    }, [params.movieId]);

     return (
        <CastContainer>
            {cast.length > 0 ? (
                cast.map((actor) => (
                    <div className="actor-info" key={actor.id}>
                        {actor.profile_path ? (
                            <img src={`${imgLink}${actor.profile_path}`} alt={actor.original_name} />
                        ) : (
                            <div>Sorry we don't have this picture</div>
                        )}
                        <h2>{actor.original_name}</h2>
                        <p>Role: {actor.character}</p>
                    </div>
                ))
            ) : (
                <div className="no-cast">We don't have any cast information for this movie</div>
            )}
        </CastContainer>
    );
}

export default Cast;