import React from 'react'
import{CheckboxSVGMap}from "react-svg-map"
import USCounties from '@svg-maps/usa.counties';
import './styles.css';
import Subheader from '../components/subheader';
import { useState } from 'react';
import VisitedStatesList from '../components/visitedList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function CountyMap() {
  const [selectedStates,setselectedStates]= useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser ? currentUser._id : null;
  //get current user using redux useSelector
  useEffect(()=>{
    if(userId!=null){
      const apiUrl = '/server/map/update'
      const queryParams = {
        user: userId,
        type:'COUNTY',
      };
      const queryString = new URLSearchParams(queryParams).toString();
      const fullUrl = `${apiUrl}?${queryString}`;
      fetch(fullUrl)
      .then(response=>{
        if(!response.ok){
          throw new Error('failed to fetch map')
        }
        return response.json();
      })
      .then(data=>{
        setselectedStates(Array.isArray(data)?data:[])
      })
      .catch(error => console.error('Error fetching map state:', error))
    }
  }, [userId])


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
          mapType:'COUNTY',
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
    const selectedIds = selected.map(location => location.id);//what is being clicked 
    const newSelectedStates = [...new Set([...selectedStates, ...selectedIds])];
    setselectedStates(newSelectedStates)//set state
    if(userId!= null){
      updateMapState(newSelectedStates)//update map 
    }
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
