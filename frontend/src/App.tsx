import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import { Publish } from './pages/Publish'
import {Blog} from './pages/Blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          {/* <Route path="/signin" element={<SigninLeft />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/publish" element={<Publish/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App