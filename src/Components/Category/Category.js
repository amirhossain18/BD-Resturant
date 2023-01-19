import React, { useEffect, useState } from 'react';

const Category = () => {

    const [products, setProducts]=useState([]);
   const [loading, setLoading] = useState(false);
//   console.log(productsAll)
useEffect(()=>{
  fetch('')
  .then(res=>res.json())
  .then(data=>console.log(data))
},[])

    return (
        <div>
            <h2>This is category </h2>
        </div>
    );
};

export default Category;