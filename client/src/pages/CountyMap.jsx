import React from 'react'
import{CheckboxSVGMap}from "react-svg-map"
import USCounties from '@svg-maps/usa.counties';
import './styles.css';
import Subheader from '../components/subheader';
import { useState } from 'react';


export default function CountyMap() {
    const [selectedStates,setselectedStates]= useState([]);
  const handleLocationClick = (selected)=>{
    console.log("Selected locations:",selected);
    setselectedStates(selected.map(location=>location.id))
  }
  const getLocationClassName = (location)=>{
    return selectedStates.includes(location.id) ? 'state selected' : 'state';
  }
  return (
    <div>
    <Subheader></Subheader>
      <CheckboxSVGMap className='Countymap'map={USCounties}onChange={handleLocationClick}locationClassName={getLocationClassName}/>
      {selectedStates.map((stateId) => (
          <p key={stateId}>{stateId} visited</p>
        ))}
    </div>
    
  )
}
