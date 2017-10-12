import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Movie from './Movie';

// TODO: fetch movie data IF not already fetched
// TODO: do not show any data unless it is fetched

const MoviePage = ({ movie }) =>
  <Card>
    <CardImg top width="100%" src={'http://image.tmdb.org/t/p/w154/' + movie.poster_path} alt="Card image cap" />
    <CardBody>
      <CardTitle>{movie.title}</CardTitle>
      <CardSubtitle>{movie.homepage}</CardSubtitle>
      <CardText>{movie.overview}</CardText>
    </CardBody>
  </Card>

export default connect(
  (state, props) => ({
    movie: state.app.movies[props.params.id]
  })
)(MoviePage);
