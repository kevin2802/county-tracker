import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';

export default function App() {
  //things here go in all pages
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/about"element={<About />}/>
        <Route path="/sign-in"element={<Signin />}/>
        <Route path="/sign-up"element={<Signup />}/>
        <Route path="/profile"element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  )
}
