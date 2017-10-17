const API_KEY = process.env.REACT_APP_API_KEY;

export const getMovies = () =>
  fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    {
      method: "GET"
    }
  ).then(res => res.json());


export const getMovie = ({ id }) =>
  fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    {
      method: "GET"
    }
  ).then(res => res.json());

export const searchMovies = ({ query }) =>
	fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false/`,
		{
			method: "GET"
		}
	).then(res => res.json());
