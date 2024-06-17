import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
//NEED TO CHANGE THIS FOR FINAL WEBSITE BUILD
//maybe add different maps to go to
//change map to dropdown menu

export default function Header() {
  const [isDropdownOpen,setIsDropdownOpen]=useState(false)
  //dropdown is default closed
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const {currentUser }= useSelector((state)=>state.user)
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center max-w-6xl mx-auto
      p-3'>
        <Link to='/'>
        <h1 className='font-bold'>County Tracker</h1>
        </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/sign-in'>
                {currentUser ? (
                  <li>{currentUser.username}</li>
                ):(
                  <li>Sign In</li>
                )}
               
                </Link>
                <li className="relative">
            <button
              className="flex items-center"
              onClick={toggleDropdown}
            >
              Maps
              
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100"               onClick={toggleDropdown}
                >
                  <Link to="/states-map">States Map</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100"              onClick={toggleDropdown}
                >
                  <Link to="/county-map">County Map</Link>
                </li>
              </ul>
            )}
          </li>
                
            </ul>
      </div>
    </div>
  )
}
