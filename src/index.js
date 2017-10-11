import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import App from './App';
import MoviesPage from './components/MoviesPage';
import MoviePage from './components/MoviePage';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" componnet={App}>
        <IndexRoute component={App} />
        <Route path="movies" component={MoviesPage} />
        <Route path="movie/:id" component={MoviePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
