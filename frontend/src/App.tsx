import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Home } from './pages/Home'
import { Edit } from './pages/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={<SigninLeft />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/edit" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App