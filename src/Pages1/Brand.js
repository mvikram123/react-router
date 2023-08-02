import React from "react";
import { Outlet ,useNavigate} from "react-router-dom";


const Brand =()=>{
    let navigate=useNavigate();

    return (

        <div>
            <h1>Brand</h1>
            <h1>our Brand</h1>
          
            <button onClick={()=>navigate("/brand/apple")}>Apple</button>
           <button onClick={()=>navigate("/brand/nokia")}>Nokia</button>
           <Outlet />
        </div>
       
    )
}
export default Brand;