const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovies = () =>
  fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2a1141cf129712b8530cbe19c40da995`,
    // `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    {
      method: "GET"
    }
  ).then(res => res.json());


export const getMovie = ({ id }) =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=2a1141cf129712b8530cbe19c40da995`,
    // `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    {
      method: "GET"
    }
  ).then(res => res.json());
