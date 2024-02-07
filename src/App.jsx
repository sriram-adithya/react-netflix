import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

const App = () => {
  return (
    <>
    <AuthContextProvider >
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/profile' element={<Profile />}/>
    </Routes>
    </AuthContextProvider>
    </>
  )
}

export default App