import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import { LoadingUi } from '../components/common/LoadingUi';
import { FilmDetail } from '../components/filmDetail/FilmDetail';

//rutas
import { Home } from '../components/home/Home';
import { MoviesAndSeries } from '../components/moviesAndSeries/MoviesAndSeries';
import { SearchResults } from '../components/Search/SearchResults';
import { TopRatedAndPopular } from '../components/topRatedAndPopular/TopRatedAndPopular';

export const AppRouter = () => {
    return (
        <Switch>

            <Route exact path="/movie" component={ MoviesAndSeries } />

            <Route exact path="/movie/:search" component={ TopRatedAndPopular } />

            <Route exact path="/tv" component={ MoviesAndSeries } />

            <Route exact path="/tv/:search" component={ TopRatedAndPopular } />

            <Route exact path="/detail/:type/:id" component={ FilmDetail } />

            <Route exact path="/search/:name" component={ SearchResults } />

            <Route exact path="/prueba" component={ LoadingUi } />

            <Route exact path="/" component={Home} />

        </Switch>
    )
}