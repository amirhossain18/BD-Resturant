import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Count = () => {

 const initialState = 0;
 const reducer = (state, action) =>{
    if(action.type === "INCREMENT"){
        return state + action.payload
    } else if(action.type === "DICRIMENT"){
        return state -action.payload
    } else { return state}

 }
    const [state , dispatch]= useReducer(reducer, initialState)
    return (
        <Card className='m-auto' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Total : {state}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       <div className="d-flex justify-content-between">
       <Button onClick={()=> dispatch({type: "DICRIMENT" , payload: 2})} variant="primary">Minus </Button>
        <Button onClick={()=> dispatch({type: "INCREMENT" , payload: 5})}  variant="primary">Add</Button>
       </div>
      </Card.Body>
    </Card>
    );
};

export default Count;