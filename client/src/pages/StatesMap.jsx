import React from 'react'
import USA from '@svg-maps/usa';
import reactDOM from "react-dom"
import { CheckboxSVGMap } from 'react-svg-map';


export default function statesmap() {
  return (
    <div>
      <CheckboxSVGMap map={USA}/>;
    </div>
  )
}
