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
          <Movie key={1 /* TODO */} {...movie}/>
        )}
      </CardColumns>
    )
  }
}

export default connect(
  (state) => ({
    movies: state.app.movies
  }),
  { fetchMovies }
)(MovieList);
