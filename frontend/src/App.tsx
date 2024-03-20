import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import { Publish } from './pages/Publish'
import {Blog} from './pages/Blog'
import Protected from './pages/Protected'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Protected Component={Signin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/" element={<Protected Component={Home}/>} />
          <Route path="/publish" element={<Protected Component={Publish}/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App