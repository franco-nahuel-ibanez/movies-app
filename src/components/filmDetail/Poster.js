import { Box, Grid, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    box:{
        overflow: 'hidden'
    },

    img:{
        width: '100%'
    }
})

export const Poster = ({poster}) => {

    const classes = useStyles()

    return (
        <Grid item xs={3} >
            <Box 
                width="1"
                className={ classes.box }
            >
                <img 
                    src={`https://image.tmdb.org/t/p/w780/${poster ? poster : null }`} 
                    alt="asd" 
                    className={ classes.img }             
                />
            </Box>
        </Grid>
    )
}
