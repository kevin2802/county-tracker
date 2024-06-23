import React, { useState } from 'react';
import { useEffect } from 'react';
import USA from '@svg-maps/usa';
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
  
  useEffect(()=>{
    if(userId!=null){
      const apiUrl = '/server/map/update'
      const queryParams = {
        user: userId,
        type:'STATE',
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
          mapType:'STATE',
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
    //selectedstates is what the database has 
    //idea go through db --> if selectedIDs (which is what is being clicked)-
    //does not match up with db, i.e something is removed, then remove it from selectedStates(what is in the db)
    //if selectedStates is size 1 then we have to manually remove the last element if it is clicked
    console.log(selectedIds)
    selectedStates.forEach(state => {
      if(selectedIds.includes(state)== false){

        if(selectedStates.length===1){
          selectedStates.splice(0)
        }
      }
      else{
        const i = selectedStates.indexOf(state)
        selectedStates.splice(i)
        
      }
      
    });
    //combine the array that is clicked with the array from the db
    const newSelectedStates = [...new Set([...selectedStates, ...selectedIds])];
    setselectedStates(newSelectedStates)
    if(userId!= null){//only do this if there exists a db (if there is a user)
      updateMapState(newSelectedStates)
    }
    
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