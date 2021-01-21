import * as actionTypes from './actionTypes';

const initialStateRecipe = {
    recipes : [],
    loading : false,
    error : false,
}
const initialSearch = {
    searchItem : "chicken"
}
export const searchReducer = (state = initialSearch,action) =>{
    switch (action.type) {
         case actionTypes.UPDATE_SEARCH_ITEM:
            return {
                ...state,
                searchItem : action.payload.searchItem,
            }
            
        default:
            return state;
    }

}

export const recipeReducer = (state = initialStateRecipe,action)=>{

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
        debugger;
            return {
                ...state,
                loading : false,
                recipes : [],
                error :action.payload.error
            }
        default:
            return state;
    }
}