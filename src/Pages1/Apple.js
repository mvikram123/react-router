import React from "react";
import Products from "../Components/Products";


let productData=[{
    id:1, brand:"apple mac " ,des:"apple mac pro", price:"$50000",
    img :"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
},
{
    id:2, brand:"apple mac " ,des:"apple mac pro", price:"$50000",
    img :"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
},
{
    id:3, brand:"apple mac " ,des:"apple mac pro", price:"$50000",
    img :"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
}
]


const Apple=()=>
{



    return (
        <div className="apple">
            {
                productData.map((items)=>(
                    <div>
                        <Products name={items.name} img={items.img} des={items.des} price={items.price}/>
                    </div>
                
                ))
                }
         </div>

    )
}
export default Apple;