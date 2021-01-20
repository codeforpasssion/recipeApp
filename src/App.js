import React,{useState} from 'react'
import './index.css';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import RecipeApp from './components/RecipeApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store} from './redux/store';
import {Provider} from 'react-redux';
const App = () => {
    const [searchItem, setSearchItem] = useState("")
    const getSearchItem = (value)=>{
        setSearchItem(value);
    }
    return (
        <div className="search-recipe-container">
            <Provider store={store}>
                <Container>
                    <Header/>
                    <RecipeApp/>
                </Container>
            </Provider>
        </div>
    )
}

export default App
