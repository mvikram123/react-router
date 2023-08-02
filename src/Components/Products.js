import React from "react";


const Products =({name, img, price, des})=>{

    return (

        <div className="products">
           <img src={img} alt={name}/>

           <h3>{name}</h3>
           <p>{des}</p>
           <p>{price}</p>
        </div>
    )
}
export default Products;