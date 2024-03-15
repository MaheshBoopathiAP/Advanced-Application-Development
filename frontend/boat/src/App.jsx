import React from 'react'
import LoginForm from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Navbar from './layout/Navbar'

function App() {
  return (
    <div className='bg-home-pic h-screen bg-cover'>
      {/* <Navbar /> */}
      <LoginForm />
      {/* <Home /> */}
      {/* <Register/> */}
    </div>
  )
}

export default App