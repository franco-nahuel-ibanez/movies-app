import React from 'react';
import { Poster } from './Poster';
import { BoxText } from './BoxText';

import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexGrow: '1',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(180deg, rgba(68,67,67,0.6502976190476191) 0%, rgba(34,34,34,0.742734593837535) 45%, rgba(15,15,15,0.8463760504201681) 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
})

export const ContainerDetail = ({movie}) => {

    const classes = useStyles()

    return (
        <Container className={classes.root} style={{ backgroundImage: `linear-gradient(180deg, rgba(68,67,67,0.6502976190476191) 0%, rgba(34,34,34,0.742734593837535) 45%, rgba(15,15,15,0.8463760504201681) 100%), url(https://image.tmdb.org/t/p/original${movie.backdrop})` }}
        >
            <Grid
                container
                justifyContent="center"
                spacing={4}
            >
                <Grid item xs={12}>1</Grid>

                {/* poster */}
                <Poster 
                    poster={ movie.poster }
                /> 

                {/* text */}
                <BoxText 
                    {...movie}
                />
            </Grid>

        </Container>
    )
}
