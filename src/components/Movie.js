import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import { connect } from 'react-redux';
// import { fetchMovies } from '../reducers/appReducer';
import { Link } from 'react-router'

const Movie = (movie) => {
  return (
    <Card>
      <CardImg top width="100%" src={'http://image.tmdb.org/t/p/w154/' + movie.poster_path} alt="Card image cap" />
      <CardBody>
        <CardTitle>
          <Link to={`movie/${movie.id}`}>{movie.original_title}</Link>
        </CardTitle>
        <CardSubtitle>{movie.homepage}</CardSubtitle>
        <CardText>{movie.overview}</CardText>
      </CardBody>
    </Card>
  )
}

export default Movie;
