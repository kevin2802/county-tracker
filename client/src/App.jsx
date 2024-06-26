import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Board from './pages/Board';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Statesmap from './pages/StatesMap';
import Header from './components/Header';
import CountyMap from './pages/CountyMap';

export default function App() {
  //things here go in all pages
  return (
    <BrowserRouter >
      <Header/>
      <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/board"element={<Board />}/>
        <Route path="/sign-in"element={<Signin />}/>
        <Route path="/sign-up"element={<Signup />}/>
        <Route path="/profile"element={<Profile />}/>
        <Route path="/states-map"element={<Statesmap />}/>
        <Route path='county-map'element={<CountyMap />}/>
      </Routes>
    </BrowserRouter>
  )
}
