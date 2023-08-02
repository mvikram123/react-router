import React from "react";
import Products from "../Components/Products";


let productData=[{
    id:1, brand:"nokia " ,des:"nokia pro", price:"$50",
    img :"https://review-plus.com/wp-content/uploads/2023/03/Nokia-C14-Pro-Review-plus.jpg.webp",
},
{
    id:2, brand:"Nokia " ,des:"Nokia pro", price:"$50",
    img :"https://review-plus.com/wp-content/uploads/2023/03/Nokia-C14-Pro-Review-plus.jpg.webp",
},
{
    id:3, brand:"Nokia " ,des:"Nokia pro", price:"$50",
    img :"https://review-plus.com/wp-content/uploads/2023/03/Nokia-C14-Pro-Review-plus.jpg.webp",
}
]


const Nokia=()=>
{



    return (
        <div className="nokia">
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
export default Nokia;