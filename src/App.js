import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MovieList from './components/MovieList';

class App extends Component {
  render() {
    return (
      <Container>
        <MovieList />
      </Container>
    );
  }
}

export default App;
