import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( (theme) => ({

    root:{
        [theme.breakpoints.up('md')] :{ fontSize: "3rem" },
        [theme.breakpoints.down('sm')] :{ fontSize: "2rem" },
        [theme.breakpoints.down('xs')] :{ fontSize: "1.5rem" }
    }
}));


export const Title = ({film, busqueda}) => {

    const classes = useStyles()

    let title = "Todas las peliculas y series"
    switch ( true ) {
        case ( (film === "movie" && busqueda === "popular") ):
            title = "Lista de Peliculas Populares"
            break;

        case ( film === "movie" && busqueda === "top_rated" ):
            title = "Lista de Peliculas mejores valoradas"
            break;

        case ( film === "tv" && busqueda === "popular" ):
            title = "Lista de Series Populares"
            break;

        case ( film === "tv" && busqueda === "top_rated" ):
            title = "Lista de Series mas valoradas"
            break;

        case ( film === "genre" ):
            title = "Lista de Series mas valoradas"
        break;

        case ( film === "tv" && busqueda === undefined ):
            title = `Lista completa de series`
            break;

        case ( film === 'movie' && busqueda === undefined ):
            title = `Lista completa de peliculas`
            break;

        default:
            break
    }
    
    return (
        <>

            <Box py={3} >
                <Typography
                    variant="h3"
                    align="center"
                    className={ classes.root }
                >
                    {title}
                </Typography>
            </Box>
            <Box pb={3}>
                <Divider />
            </Box>
        </>
    )
}
