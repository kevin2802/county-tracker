import React from 'react'
import{CheckboxSVGMap}from "react-svg-map"
import USCounties from '@svg-maps/usa.counties';
import './styles.css';
import Subheader from '../components/subheader';
import { useState } from 'react';
import VisitedStatesList from '../components/visitedList';


export default function CountyMap() {
    const [selectedStates,setselectedStates]= useState([]);
  const handleLocationClick = (selected)=>{
    setselectedStates(selected.map(location=>location.id))
  }
  const getLocationClassName = (location)=>{
    return selectedStates.includes(location.id) ? 'state selected' : 'state';
  }
  return (
    <div>
    <Subheader></Subheader>
      <CheckboxSVGMap className='Countymap'map={USCounties}onChange={handleLocationClick}locationClassName={getLocationClassName}/>
      <VisitedStatesList selectedStates={selectedStates} type = {'Counties'}></VisitedStatesList>
    </div>
    
  )
}
