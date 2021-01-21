import * as actionTypes from './actionTypes';

export const fetchRecipe = ()=>{
    return {
        type : actionTypes.FETCH_RECIPE
    }
}

export const fetchRecipeSuccess = (data)=>{
    return {
        type : actionTypes.FETCH_RECIPE_SUCCESS,
        payload : {
            data
        }
    }
}

export const fetchRecipeFailure = (error)=>{
return {
        type : actionTypes.FETCH_RECIPE_FAILURE,
        payload : {
            error
        }
    }
}

export const updateSearchItem = (value)=>{
return {
        type : actionTypes.UPDATE_SEARCH_ITEM,
        payload : {
            searchItem :value
        }
    }
}


export const fetchRecipeApi = (url)=>{
    return async (dispatch)=> {
        dispatch(fetchRecipe());
        try {
            const response = await fetch(url);
            const data = await response.json();
            dispatch(fetchRecipeSuccess(data.hits));
        }catch(error){
            dispatch(fetchRecipeFailure(error.message))
        }
    }
}

