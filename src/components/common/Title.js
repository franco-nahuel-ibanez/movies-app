import React from 'react'
import { useParams } from 'react-router-dom'

export const Title = () => {
    
    let { film, busqueda } = useParams()
    let title = "Todas las peliculas y series"

    switch ( true ) {
        case ( (film === "movie" && busqueda === "popular") ):
            title = "Lista de Peliculas Populares"
            break;

        case ( film === "movie" && busqueda === "top_rated" ):
            title = "Lista de Peliculas mas valoradas"
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

        case ( film !== undefined && busqueda === undefined ):
            title = `Lista completa de ${film}`
            break;

        default:
            break
    }
    
    return (
        <div>
            <h1>{ title }</h1>
        </div>
    )
}
