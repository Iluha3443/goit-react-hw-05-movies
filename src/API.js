import axios from "axios";

function requestMovies ()  {
const API = `86374829588cb08ffa498bec6fb1661b`;
   return axios(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, {
        params:{
        api_key: API,
        }
    })
    .then(data => data)
    .catch(error => console.log(error))
}
export default requestMovies;