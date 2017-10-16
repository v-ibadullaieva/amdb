import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Movie from './Movie';
import { fetchMovie } from '../reducers/appReducer';

class MoviePage extends Component {
  componentDidMount() {
    if (!this.props.movie) {
      this.props.fetchMovie({ id: this.props.params.id });
    }
  }

  render() {
    const { movie } = this.props;

    if (movie) {
      return (
        <Container>
          <Card>
            <CardImg top width="100%" src={'http://image.tmdb.org/t/p/w154/' + movie.poster_path} alt="Card image cap" />
            <CardBody>
              <CardTitle>{movie.title}</CardTitle>
              <CardSubtitle>{movie.homepage}</CardSubtitle>
              <CardText>{movie.overview}</CardText>
            </CardBody>
          </Card>
        </Container>
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
