import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Movie from './Movie';
import { fetchMovie } from '../reducers/appReducer';

// TODO: fetch movie data IF not already fetched
// TODO: do not show any data unless it is fetched

class MoviePage extends Component {
  componentDidMount() {
    this.props.fetchMovie({ id: this.props.params.id });
  }

  render() {
    const movie = this.props.movie;
    if (movie) {
      return (
        <Card>
          <CardImg top width="100%" src={'http://image.tmdb.org/t/p/w154/' + movie.poster_path} alt="Card image cap" />
          <CardBody>
            <CardTitle>{movie.title}</CardTitle>
            <CardSubtitle>{movie.homepage}</CardSubtitle>
            <CardText>{movie.overview}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return null
    }
  }
}

export default connect(
  (state, props) => ({
    movie: state.app.movies[props.params.id]
  }),
  { fetchMovie }
)(MoviePage);
