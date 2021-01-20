import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
const RecipeApp = ({searchItem}) => {
    const AppId = "f9c8435b";
    const AppKey = "769e409b0173330f4f5080a7e9f6a06c";
    const [recipes, setRecipes] = useState([]);
    const defaultSearch = searchItem || "chicken"
    useEffect(() => {
       getRecipe();
    }, [searchItem]);
    const getRecipe = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${defaultSearch}&app_id=${AppId}&app_key=${AppKey}`);
        const data = await response.json();
        console.log(data.hits);
        setRecipes(data.hits)
    };
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

export default RecipeApp
