import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchForm = ({handleSearch}) => {
    const [recipe, setRecipe] = useState('')
    const handleSubmit = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        console.log(recipe)
        handleSearch(recipe);
    }
    return (
        <div className="search-container">
        <Form inline className="search-form"  onSubmit={handleSubmit}>
            <Form.Group  className="mt-2 mb-2 mr-3" controlId="formSearchRecipe" >
                <Form.Control onChange={(e)=>{setRecipe(e.target.value)}} type="text" placeholder="Enter item" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default SearchForm
