import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchMovies } from '../reducers/appReducer';
import Movie from './Movie';

class MovieList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }
  render() {
  console.log(this.props.movies);
    return (
      <CardColumns>
        {this.props.movies.map(movie =>
          <Movie { ...movie }/>
        )}
      </CardColumns>
    )
  }
}

export default connect(
  (state) => ({
    movies: state.movies
  }),
  { fetchMovies }
)(MovieList);
