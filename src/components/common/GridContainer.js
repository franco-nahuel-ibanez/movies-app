import React from 'react';
import { Grid } from '@material-ui/core';
import { CardUi } from './CardUi';
import { useSelector } from 'react-redux';

export const GridContainer = () => {
    const {dataCards, loading} = useSelector(state => state.data)

    return (
        <Grid container spacing={ 1 } m={2} justifyContent="center">
            {
                loading !== true &&
                dataCards.map( film => (
                    <Grid key={film.id} item xs={5} sm={4} md={3}>
                        <CardUi
                            { ...film }
                            key={film.id} 
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}