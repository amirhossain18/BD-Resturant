import React from 'react';
import { Button } from 'react-bootstrap';
import './HomeTop.css'
const HomeTop = () => {
    return (
        <div className='homeTop'>
          <div className='textHome'>
          <div className='btnHome'>
                 <h1 className='brandTitle'>BD Resturant</h1>
                 <h6>We are now accepting all inquiries for full buyouts for private events and holiday parties, any day of the week, day or night. Our restaurant can accommodate up to 45 guests and potentially more.</h6>
                 <Button variant="danger">Order Now</Button>
          </div>
          </div>
                
        </div>
    );
};

export default HomeTop;