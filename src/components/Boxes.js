import React from 'react';
import '../App.css';

const Boxes = ({press, clearBoxes, box0, box1, box2, box3, boxesOpacity, boxColor}) => {
  return (
    <div className="grid-container body" style={{transition: '2s ease-in-out', opacity: boxesOpacity}}>

      <div className={`grid-item one ${box0}`} style={{backgroundColor: boxColor}} onClick={() => {press(0); clearBoxes()} } />
      <div className={`grid-item two ${box1}`} style={{backgroundColor: boxColor}} onClick={() => {press(1); clearBoxes()} } />
      <div className={`grid-item three ${box2}`} style={{backgroundColor: boxColor}} onClick={() => {press(2); clearBoxes()} } />
      <div className={`grid-item four ${box3}`} style={{backgroundColor: boxColor}} onClick={() => {press(3); clearBoxes()} } /> 

    </div>
  )
} 

export default Boxes;


