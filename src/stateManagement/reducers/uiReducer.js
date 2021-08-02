import { types } from '../../types/types';

const initialState = {
    open: false,
}


export const uiReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.toggleOpen:
            return{
                ...state,
                open: !state.open
            }
            
        default:
            return state
    }
}