export const getAllFilms = async (url, type = "movie") => {    
    
    let allData = []

    try {
        let req = await fetch(url)

        let res = await req.json()
        res.results.map( data => (
            allData.push({
                title: data?.title,
                name: data?.name,
                type: type,
                id: data.id,
                poster: data.poster_path,
                background: data.backdrop_path,
            })
        ))
        
        return allData;

    } catch (error) {
        console.log(error)        
    }


    

    
}