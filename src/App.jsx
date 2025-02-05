import React from "react"; 
import Posts from "./Posts";
import AxiosPost from "./AxiosPost";
// import Home from "./Home";
import ViewPosts from "./ViewPosts";
import { BrowserRouter ,Route,Routes} from "react-router";
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/post/:id" element={<ViewPosts/>}/>
        <Route path="/create" element={<AxiosPost/>}/>
        
        
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
