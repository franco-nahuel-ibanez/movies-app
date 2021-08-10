import { types } from "../../types/types";

const initialState = {
    loading: true,
    films: [],
    page: 1
}

export const dataReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case types.getAllFilms:

            return{
                ...state,
                films: action.payload,
                loading: false
            }

            
    
        default:
            return state
    }
}