import React from "react"; 
import Posts from "./Posts";
import AxiosPost from "./AxiosPost";
import Home from "./Home";
import { BrowserRouter ,Route,Routes} from "react-router";
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/create" element={<AxiosPost/>}/>
        
        
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
