import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { getMovies, getMovie } from '../services/api';
import { MOVIES_FETCH, MOVIE_FETCH, fetchMovieSuccess, fetchMoviesSuccess } from '../reducers/appReducer';

export default (action$) =>
  Observable.merge(
    action$
      .ofType(MOVIES_FETCH)
      .flatMap(({ payload }) =>
        getMovies().then(movies => fetchMoviesSuccess(movies))),
    action$
      .ofType(MOVIE_FETCH)
      .flatMap(({ payload }) =>
        getMovie({ id: payload.id }).then(movie => fetchMovieSuccess(movie)))
  )
