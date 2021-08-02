import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
//rutas

import { Home } from '../components/home/Home';
import { Series } from '../components/paginasDePrueba/Series';
import { Peliculas } from '../components/paginasDePrueba/Peliculas';


export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/:film" component={ Peliculas } />

            <Route exact path="/:film/:busqueda" component={Series} />

            <Route exact path="/" component={Home} />
        </Switch>
    )
}