export const MOVIES_FETCH = "MOVIES_FETCH";
export const MOVIE_FETCH = "MOVIE_FETCH";
export const MOVIES_FETCH_SUCCESS = "MOVIES_FETCH_SUCCESS";
export const MOVIE_FETCH_SUCCESS = "MOVIE_FETCH_SUCCESS";

export const fetchMovies = () => ({
  type: MOVIES_FETCH
})

export const fetchMovie = ({ id }) => ({
  type: MOVIE_FETCH,
  payload: { id }
})

export const fetchMoviesSuccess = (movies) => ({
  type: MOVIES_FETCH_SUCCESS,
  payload: movies
})

export const fetchMovieSuccess = (movie) => ({
  type: MOVIE_FETCH_SUCCESS,
  payload: movie
})

const initState = {
  movies: {},
  moviesList: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS: {
      const movies = {};
      action.payload.results.forEach(movie => movies[movie.id] = movie);

      return {
        ...state,
        movies: {
          ...state.movies,
          ...movies
        },
        moviesList: {
          ...state.moviesList,
          [action.payload.page]: action.payload
        }
      };
    }
    case MOVIE_FETCH_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.id]: action.payload
        }
      }
    }
    default:
      return state;
  }
};