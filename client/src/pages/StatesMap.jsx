import React, { useState } from 'react';
import { useEffect } from 'react';
import USA from '@svg-maps/usa';
import reactDOM from "react-dom"
import { CheckboxSVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
import './styles.css';
import Subheader from '../components/subheader';
import VisitedStatesList from '../components/visitedList';
import { useSelector } from 'react-redux';


export default function Statesmap() {
  const [selectedStates,setselectedStates]= useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : null;
  
  const updateMapState = async (newSelectedStates) => {
    try {
      const res = await fetch('/server/map/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          mapState: newSelectedStates,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to save map state');
      }
    } catch (error) {
      console.error('Error saving map state:', error);
    }
  };
  const handleLocationClick = (selected)=>{
    const newSelectedStates = selected.map(location => location.id);
    setselectedStates(newSelectedStates)
    updateMapState(newSelectedStates)
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