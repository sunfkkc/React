import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import My from './features/my/my'
import User from './features/user/User'
import Header from './component/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<><My />,<User /></>} />
          <Route path='/login' element={<><Login />,</>} />


        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App;
