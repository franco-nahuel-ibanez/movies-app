import { getAllFilms } from "../../helpers/getAllData";
import { getDataMovie } from "../../helpers/getDataMovie";
import { types } from "../../types/types";


export const setLoadingOnTrue = () => ({
    type: types.startLoading
})

export const setLoadingOnFalse = () => ({
    type: types.finishLoading
})

export const getDataOfHome = () => {

    const urlMovies = `https://api.themoviedb.org/3/discover/movie/?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=en&page=1`;

    const urlSeries = `https://api.themoviedb.org/3/discover/tv/?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=en&page=1`;

    return async (dispatch) => {

        dispatch( setLoadingOnTrue() )

        const dataCards = await getAllFilms(urlMovies, "movie");
        const dataCarousel = await getAllFilms(urlSeries, 'tv');

        dispatch({
            type: types.dataHome,
            payload: {
                dataCards,
                dataCarousel
            }
        })

        dispatch( setLoadingOnFalse() )
    }
}

export const getMoviesAndSeries = ( type, page ) => {
    
    const url = `https://api.themoviedb.org/3/discover/${type}/?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=en&page=${page}`;

    return async ( dispatch ) => {

        dispatch( setLoadingOnTrue() )

        const dataCards = await getAllFilms( url, type );

        dispatch({
            type: types.moviesAndSeries,
            payload: {
                dataCards 
            }
        })
        dispatch( setLoadingOnFalse() )
    }
} 

export const getTopRatedAndPopular = ( type, search, page ) => {

    const url = `https://api.themoviedb.org/3/${type}/${search}?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=es-US&page=${page}`;

    return async ( dispatch ) => {

        dispatch( setLoadingOnTrue() );

        const dataCards = await getAllFilms( url, type );
        
        dispatch({
            type: types.topRatedAndPopular,
            payload: {
                dataCards
            }
        })

        dispatch( setLoadingOnFalse() );
    }
}

export const clearDetailMovie = () => ({
    type: types.clearDataMovie
})

export const getDetailMovie = (id, type ) => {

    let url = `https://api.themoviedb.org/3/${type}/${id}?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=es`

    return async (dispatch) => {

        dispatch( setLoadingOnTrue() );
        
        const movieDetail = await getDataMovie(url)

        dispatch({
            type: types.getDataMovie,
            payload: {
                movieDetail
            }
        })

        dispatch( setLoadingOnFalse() );
    }
}

//obtener trailer de pelicula
export const getTrailer = ( id, type ) => {

    let url = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=en-US`

    return async ( dispatch ) => {
        const req = await fetch(url);
        
        const res = await req.json();   
    
        const trailer = await res.results.find( video => video.type === 'Trailer' );
        
        dispatch({
            type: types.getVideo,
            payload: {
                trailer
            }
        })
    }
}

export const searchMovie = (name) => {

    let urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=es-ES&query=${name}&page=1&include_adult=false`

    let urlSerie = `https://api.themoviedb.org/3/search/tv?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=es-ES&query=${name}&page=1&include_adult=false`

    return async (dispatch) => {

        const movie = await getAllFilms(urlMovie, "movie")
        const serie = await getAllFilms(urlSerie, "tv");
        
        const results = [...movie, ...serie]

        console.log(results)

        dispatch({
            type: types.search,
            payload: results
        })
    }
}

export const resetSearch = () =>({
    type: types.resetSearchData
})


export const handlePagination = (value) => ({
    type: types.changePage,
    payload: value
})

export const setPage = (value) => ({
    type: types.resetPage,
    payload: value
})
