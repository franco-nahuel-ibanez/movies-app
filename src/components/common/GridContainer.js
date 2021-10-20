import React from 'react';
import { Grid } from '@material-ui/core';
import { CardUi } from './CardUi';
import { useSelector } from 'react-redux';

export const GridContainer = () => {
    const {dataCards, loading} = useSelector(state => state.data)

    return (
        <Grid container spacing={ 3 }>
            {
                loading !== true &&

                dataCards.map( film => (
                    <Grid key={film.id} item xs={3}>
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