import React, { useState } from 'react';
import USA from '@svg-maps/usa';
import reactDOM from "react-dom"
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import './styles.css';
import Subheader from '../components/subheader';
import VisitedStatesList from '../components/visitedList';


export default function Statesmap() {
  const [selectedStates,setselectedStates]= useState([]);
  const handleLocationClick = (selected)=>{
    setselectedStates(selected.map(location=>location.id))
  }
  
  const getLocationClassName = (location)=>{
    return selectedStates.includes(location.id) ? 'state selected' : 'state';
  }
  return (

    <div>
      <Subheader/>
      <CheckboxSVGMap className= 'StateMap'map={USA} onChange={handleLocationClick}locationClassName={getLocationClassName}/>
      <VisitedStatesList selectedStates={selectedStates} type = {'States'}/>
      
    </div>
  )
}