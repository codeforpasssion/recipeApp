import * as actionTypes from './actionTypes';

const initialState = {
    recipes : [],
    loading : false,
    error : false,
    searchItem : "chicken"
}

export const recipeReducer = (state = initialState,action)=>{

    switch (action.type) {
        case actionTypes.FETCH_RECIPE:
            return {
                ...state,
                loading : true,
            }
        case actionTypes.FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                loading : false,
                recipes : action.payload.data
            }
        case actionTypes.FETCH_RECIPE_FAILURE:
            return {
                ...state,
                loading : false,
                recipes : [],
                error :action.payload.error
            }
        case actionTypes.UPDATE_SEARCH_ITEM:
            return {
                ...state,
                loading : false,
                recipes : [],
                error :false,
                searchItem : action.payload.searchItem,
            }
            
        default:
            return state;
    }
}