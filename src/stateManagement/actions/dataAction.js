import { types } from "../../types/types"


export const getAllFilms = () => {
    
    const url = `https://api.themoviedb.org/3/discover/movie/?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=en&page=1&limit=30`;
    
    let allData = [];

    return async ( dispatch ) => {
        
        let req = await fetch(url)
        let res = await req.json()
        
        console.log(res.results);

        res.results.map( data => (
            allData.push({
                title: data.title,
                id: data.id,
                lenguage: data.original_language,
                date: data.release_date,
                poster: data.poster_path,
                background: data.backdrop_path, 
            })
        ))
            
            dispatch({
                type: types.getAllFilms,
                payload: { allData }
            })
    }
}


//obtener trailer de pelicula
export const getTrailer = ( id ) => {

    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=ffca983a495ff3af858309ffa5bc6ec8&language=en-US`

    return async ( dispatch ) => {
        const req = fetch(url);
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