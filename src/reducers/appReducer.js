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
  movies: {}
};

export default (state = initState, action) => {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS: {
      // const movies = {};
      // ...action.payload,
      // action.payload.forEach(movie => movies[movie._id] = movie);
      // return {
      //   ...state,
      //   movies: {
      //     ...state.movies,
      //     ...movies
      //   }
      // };
    }
    default:
      return state;
  }
};