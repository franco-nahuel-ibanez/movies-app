import React, { useEffect } from 'react';


import CssBaseline from '@material-ui/core/CssBaseline';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailMovie,clearDetailMovie, getTrailer } from '../../stateManagement/actions/dataAction';
import { ContainerDetail } from './ContainerDetail';


export const FilmDetail = () => {

    const {type, id} = useParams()
    const { movieDetail } = useSelector(state => state.data)
    const movie = movieDetail[0]

    const dispatch = useDispatch()

    useEffect(() => {        
        dispatch( getDetailMovie(id, type) )
        dispatch( getTrailer(id, type) )

        return () => {
            dispatch( clearDetailMovie() )
        }
    }, [id, type, dispatch])
  

    return (
    <>
        <CssBaseline />
        {
            !movie ?
                <h1>Cargando...</h1>
            :        
                <ContainerDetail movie={movie} type={type} />
        }

    </>
  );
}
