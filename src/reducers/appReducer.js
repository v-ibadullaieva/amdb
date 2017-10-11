export const MOVIES_FETCH = "MOVIES_FETCH";
export const MOVIES_FETCH_SUCCESS = "MOVIES_FETCH_SUCCESS";

export const fetchMovies = () => ({
  type: MOVIES_FETCH
})

export const fetchMoviesSuccess = (movies) => ({
  type: MOVIES_FETCH_SUCCESS,
  payload: movies
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
    default:
      return state;
  }
};