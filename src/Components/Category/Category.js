import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {

    const [products, setProducts]=useState([]);
   const [loading, setLoading] = useState(false);
//   console.log(productsAll)
useEffect(()=>{
  fetch('https://raw.githubusercontent.com/amirhossainbond/BD-Resturant/main/public/Data/Category.json')
  .then(res=>res.json())
  .then(data=>setProducts(data))
},[])

    return (
      <div>
          <div className="secend-div">
            <h2 className="text-center text-danger">Hot category </h2>
         <div className="card-category container gx-10">
         {
            products.map(product =><CategoryCard 
            products={product}
            ></CategoryCard>)
           }
          
         </div>
        </div>
      </div>
    );
};

export default Category;