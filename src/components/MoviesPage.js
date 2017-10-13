import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../reducers/appReducer';
import MovieList from './MovieList';
import SearchMovieForm from './SearchMovieForm';
import Pagination from './Pagination';

const MoviesPage = () => {
  return (
    <div>
      <SearchMovieForm form='SearchMovieForm' onSubmit={fetchMovies} />
      <MovieList />
      <Pagination />
    </div>
  )
}

export default connect(
  (state) => ({
    movies: Object.values(state.app.movies)
  }),
  { fetchMovies }
)(MoviesPage);
