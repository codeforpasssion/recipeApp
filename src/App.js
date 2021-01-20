import React,{useState} from 'react'
import './index.css';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import RecipeApp from './components/RecipeApp';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [searchItem, setSearchItem] = useState("")
    const getSearchItem = (value)=>{
        setSearchItem(value);
    }
    return (
        <div className="search-recipe-container">
            <Container>
                <Header handleSearch={getSearchItem}/>
                <RecipeApp searchItem ={searchItem}/>
            </Container>
        </div>
    )
}

export default App
