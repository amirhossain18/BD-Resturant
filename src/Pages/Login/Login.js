import React, { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Login = () => {

const initialState = {
    email: "",
    password: "",
    check: false
};

const reducer = (state , action)=> {
    console.log(action);
   switch(action.type){
    case "INPUT":
        return {
            ...state ,
            [action.payload.name]: action.payload.value
        };
        case "TOGGLE":
            return {
                ...state,
                tarm :!state.tarm
            }

    default:
    return state;
   }
}



    const [state , dispatch] = useReducer(reducer , initialState)
    
    const submit = (event) => {
        event.preventDefault();
        console.log(state)
    }
    return (
        <div className="container">
            <Form onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" 
        onBlur={(e)=>dispatch({type: "INPUT" ,
         payload: {name: e.target.name , value: e.target.value}
         })} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" onBlur={(e)=>dispatch({type: "INPUT" ,
         payload: {name: e.target.name , value: e.target.value}
         })} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={()=> dispatch({type: "TOGGLE"})} type="checkbox" name="check" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!state.tarm}>
        Submit
      </Button>
    </Form> 
        </div>
    );
};

export default Login;