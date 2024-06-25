import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SVGMap } from 'react-svg-map'
import USACounties from '@svg-maps/usa.counties'
import USA from '@svg-maps/usa'
import './styles.css';
export default function Home() {
  const {currentUser }= useSelector((state)=>state.user)

  return (
    <div>
      <div>
        <h1 className='text-3xl text-center font-semibold my-7'>Welcome to County-Tracker!</h1>
      </div>
      <div className='flex flex-row gap-4 justify-center'>
        <Link to='/county-map'>
        <SVGMap map={USACounties}locationClassName={'home'}/>
        <p className='text-center'>Track Counties</p>
        </Link>
        <Link to='/states-map'>
        <SVGMap map={USA}locationClassName={'home'}/>
        <p className='text-center'>Track states</p>
        </Link>
      </div>
    </div>
  )
}
