export const getMovies = () =>
  fetch(
    'https://api.themoviedb.org/3/movie/550?api_key=2a1141cf129712b8530cbe19c40da995',
    {
      method: "GET"
    }
  ).then(res => res.json());

