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
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
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