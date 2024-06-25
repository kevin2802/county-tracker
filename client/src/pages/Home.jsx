import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SVGMap } from 'react-svg-map'
import USACounties from '@svg-maps/usa.counties'
import USA from '@svg-maps/usa'
export default function Home() {
  const {currentUser }= useSelector((state)=>state.user)

  return (
    <div>
      <div>
        <h1 className='text-3xl text-center font-semibold my-7'>Welcome to County-Tracker!</h1>
      </div>
      <div className='flex gap-4'>
        <Link to='/county-map'>
        <SVGMap map={USACounties}/>
        <p className='text-center'>Track Counties</p>
        </Link>
        <Link to='/states-map'>
        <SVGMap map={USA}/>
        <p className='text-center'>Track states</p>
        </Link>
      </div>
    </div>
  )
}
