import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/publish'
import { Blog } from './pages/Blog'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/blog/:id" element={<Blog/>} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path='/publish' element={<Publish/>}/>
      
      
    </Routes>
    </BrowserRouter>
    </>
      
  )
}

export default App
