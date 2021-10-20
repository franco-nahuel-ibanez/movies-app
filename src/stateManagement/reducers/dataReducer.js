import { types } from "../../types/types";

const initialState = {
    loading: true,
    video: [],
    movieDetail:[],
    searchResults: null, 
    dataCards: [],
    dataCarousel: [],
    page: 1
}

export const dataReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.dataHome:
            return{
                ...state,
                dataCards: action.payload.dataCards,
                dataCarousel: action.payload.dataCarousel,
            }

        case types.moviesAndSeries:
            return{
                ...state,
                dataCards: action.payload.dataCards,
            }

        case types.topRatedAndPopular:
            return{
                ...state,
                dataCards: action.payload.dataCards
            }

        case types.getDataMovie:
            return{
                ...state,
                movieDetail: action.payload.movieDetail
            }

        case types.clearDataMovie:
            return{
                ...state,
                movieDetail: []
            }

        case types.getVideo:
            return{
                ...state,
                video: action.payload.trailer
            }

        case types.search:
            return{
                ...state,
                searchResults: action.payload
            }

        case types.resetSearchData:
            return{
                ...state,
                searchResults: null
            }
        
        case types.changePage:
            return{
                ...state,
                page: action.payload
            }
        
        case types.resetPage:
            return{
                ...state,
                page: action.payload
            }

        case types.startLoading:
            return{
                ...state,
                loading: true
            }

        case types.finishLoading:
            return{
                ...state,
                loading: false
            }
            
        default:
            return state
    }
}