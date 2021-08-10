import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { CardUi } from './CardUi';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFilms } from '../../stateManagement/actions/dataAction'

export const GridContainer = () => {

    const {films, loading} = useSelector(state => state.data)
    
    const dispatch = useDispatch()

    useEffect(() => {        
        dispatch( getAllFilms() )
    }, [dispatch])

    return (
        <Grid container spacing={ 3 }>
            {
                loading !== true &&

                films.allData.map( film => (
                    <Grid key={film.id} item xs={3}>
                        <CardUi 
                            title={ film.title } 
                            poster={ film.poster }
                            key={film.key} />
                    </Grid>
                ))
            }                      
        </Grid>
    )
}