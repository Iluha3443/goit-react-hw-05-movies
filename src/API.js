import axios from "axios";

const API = `86374829588cb08ffa498bec6fb1661b`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmZkYjkxMjcyMjg3MGUyMzg4ZGQ0MzU3ODJjYTU2ZiIsInN1YiI6IjY0Y2NmNzU0NzY0Yjk5MDBlM2JhNWFkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.In4jq0rW_1654XErrGjwD7GHNgYJB4wzMI8zmAAIdDg'
  }
};

const BASE_URL = 'https://api.themoviedb.org/3/'

export function  getTranding  ()  {
   return axios(`https://API.themoviedb.org/3/trending/movie/day?language=en-US`, {
        params:{
        api_key: API,
        }
    })
    .then(data => data)
    .catch(error => console.log(error))
}


export function searchMovies(name) {
    return axios(`https://API.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, {
        params: {
            api_key: API,
        }
    })
        .then(data => data)
    .catch(error => console.log(error))
}

export function movieDetails(id) {
    return axios(`https://API.themoviedb.org/3/movie/${id}?language=en-US`, {
        params: {
            api_key: API,
        }
    })
    .then(data => data)
    .catch(error => console.log(error))
    
}

export function searchImg(img) {
    return axios(`https://image.tmdb.org/t/p/w400/${img}`)
    .then(data => data)
    .catch(error => console.log(error))
}

export async function getActorsFilm(id) {
    const response = await fetch(`${BASE_URL}movie/${id}/credits?language=en-US`, options)
  return await response.json();
}

export function getReviews(id) {
    return axios(`https://API.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, {
         params: {
            api_key: API,
        }
    })
    
}
