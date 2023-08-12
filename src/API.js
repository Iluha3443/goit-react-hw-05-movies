import axios from "axios";

const API = `86374829588cb08ffa498bec6fb1661b`;

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

export function movieCredits(id) {
    return axios(`https://API.themoviedb.org/3/movie/${id}/credits?language=en-US`, {
        params: {
            api_key: API,
        }
    })
        .then(data => data)
        .catch(error => console.log(error))
}

