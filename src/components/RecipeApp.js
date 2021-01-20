import React,{useEffect} from 'react';
import Recipe from './Recipe';
import {fetchRecipeApi} from '../redux/actions';
import {connect} from 'react-redux';

const RecipeApp = (props) => {
    const {recipes,searchItem,fetchRecipe} = props;
    const AppId = "f9c8435b";
    const AppKey = "769e409b0173330f4f5080a7e9f6a06c";
    const url = `https://api.edamam.com/search?q=${searchItem}&app_id=${AppId}&app_key=${AppKey}`;

    useEffect(() => {
       fetchRecipe(url)
    }, [searchItem]);
    return (
        <main>
            <div className="card-container">
                {
                recipes.map(({recipe})=>{
                    return <Recipe key ={recipe.label} value={recipe}/>
                })
                    
                }
            </div>
        </main>
    )
}

const mapStateToProps = (state)=>{
    return {
        recipes :  state.recipe.recipes,
        searchItem : state.searchItem.searchItem
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchRecipe : (url)=>dispatch(fetchRecipeApi(url))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeApp)
