import React, { Component } from 'react';
import { Container } from 'reactstrap';
import MoviesPage from './components/MoviesPage';

class App extends Component {
  render() {
    return (
      <Container>
        <MoviesPage />
      </Container>
    );
  }
}

export default App;
