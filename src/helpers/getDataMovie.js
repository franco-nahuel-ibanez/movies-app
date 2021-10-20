
export const getDataMovie = async (url) => {

    let dataMovie = []

    let req = await fetch(url)

    let res = await req.json()

    dataMovie.push({
        title: res.title,
        name: res.name,
        id: res.id,
        synopsis: res.overview,
        backdrop: res.backdrop_path,
        poster: res.poster_path,
        votes: res.vote_average 
    })
    
    return dataMovie
}