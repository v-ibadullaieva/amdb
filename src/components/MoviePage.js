import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Movie from './Movie';

const MoviePage = (movie) => {
  return (
    <Card>
      <CardImg top width="100%" src={movie.poster_path} alt="Card image cap" />
      <CardBody>
        <CardTitle>lol</CardTitle>
        <CardSubtitle>{movie.homepage}</CardSubtitle>
        <CardText>{movie.overview}</CardText>
      </CardBody>
    </Card>
  )
}

export default connect(
  (state, props) => ({ movie: state.app.movies[props.params.id] })
)(MoviePage);
