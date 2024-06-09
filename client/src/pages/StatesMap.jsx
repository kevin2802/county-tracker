import React, { useState } from 'react';
import USA from '@svg-maps/usa';
import reactDOM from "react-dom"
import { CheckboxSVGMap } from 'react-svg-map';
import{SVGMap}from "react-svg-map"
import 'react-svg-map/lib/index.css';
import './styles.css';


export default function Statesmap() {
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
      <h1>Click to mark a state that you have visited!</h1>
      <CheckboxSVGMap map={USA} onChange={handleLocationClick}locationClassName={getLocationClassName}/>
      <div>
      {selectedStates.map((stateId) => (
          <p key={stateId}>{stateId} visited</p>
        ))}
      </div>
      
    </div>
  )
}