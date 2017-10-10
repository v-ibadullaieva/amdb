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
      console.log(action.payload.id);
      const movie = action.payload;
      return {
        ...state,
        movies: {
          ...state.movies,
          [action.payload.id]: movie
        }
      };
    }
    default:
      return state;
  }
};