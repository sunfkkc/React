import Header from './component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Jwt from './pages/Jwt'
import Register from './pages/Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<><Home /></>} />
          <Route path='/login' element={<><Login />,</>} />
          <Route path='/jwt' element={<><Jwt />,</>} />
          <Route path='/register' element={<><Register />,</>} />


        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
