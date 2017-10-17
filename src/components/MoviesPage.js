import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { searchMovies } from '../reducers/appReducer';
import MovieList from './MovieList';
import SearchMovieForm from './SearchMovieForm';
import Pagination from './Pagination';

class MoviesPage extends Component {
  searchMovies = (obj) => {
    this.props.router.push(`/movies?query=${obj.query}`);
  }
  render() {
    return (
      <div>
        <SearchMovieForm
          form='SearchMovieForm'
          onSubmit={this.searchMovies} />
        <Pagination page={this.props.location.page} />
        <MovieList params={this.props.location.query} />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    movies: Object.values(state.app.movies)
  })
)(MoviesPage);
