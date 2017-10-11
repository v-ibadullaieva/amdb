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
    return (
      <CardColumns>
        {this.props.movies.map(movie =>
          <Movie key={movie.id} {...movie}/>
        )}
      </CardColumns>
    )
  }
}

export default connect(
  (state) => ({
    movies: Object.values(state.app.movies)
  }),
  { fetchMovies }
)(MovieList);
