import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Categorycard.css'

const CategoryCard = ({products}) => {
    const {title ,url} = products
    return (
        <div className="container">
           <CardGroup>
      <Card>
        <Card.Img variant="top" className="img-card" src={url} />
        <Card.Body>
          <Card.Title className="text-center text-danger">
            {title}
          </Card.Title>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>

    </CardGroup> 
        </div>
    );
};

export default CategoryCard;