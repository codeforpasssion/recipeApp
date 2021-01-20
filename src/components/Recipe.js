import React from 'react'
import {Card} from 'react-bootstrap';
const Recipe = ({value}) => {
    const {image,label,calories} = value;
    return (
        <div className="recipe-card">
            <Card  style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src={image}  style={{border : '1px solid'}}/>
                    <Card.Body>
                        <Card.Title>{label}</Card.Title>
                        <Card.Text>
                            calories : {calories}
                        </Card.Text>
                    </Card.Body>
            </Card>
        </div>
    )
}

export default Recipe
