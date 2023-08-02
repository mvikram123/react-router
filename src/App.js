import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import {Routes,Route} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Apple from "./Pages1/Apple";
import Brand from "./Pages1/Brand";
import Nokia from "./Pages1/Nokia"



const App=()=>{


  return (
    <div>
      {/* <Home />
      <About />
      <Contact />
      <Blog /> */}
        <Navbar />
      <Routes>
        
          {/* <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog" element={<Blog />}/> */}

          {/* in line no. 32 brand is not parent */}
          {/* <Route path="/brand" element={<Brand />}/>  */}
          {/* <Route path="/brand/apple" element={<Apple />}/>
          <Route path="/brand/nokia" element={<Nokia />}/> */}


          {/* when Components are used as children /is not used in path */}
          {/* in line no. 39  brand is a parent */}
          <Route path="/brand" element={<Brand />}> 
          <Route path="apple" element={<Apple />}/>
          <Route path="nokia" element={<Nokia />}/>
        </Route>
      </Routes>

    </div>
  )
}
export default App;