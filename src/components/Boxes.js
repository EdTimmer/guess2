import React from 'react';
import '../App.css';

const Boxes = ({press, clearBoxes, box0, box1, box2, box3}) => {
  return (
    <div className="grid-container body">

      <div className={`grid-item one ${box0}`} onClick={() => {press(0); clearBoxes()} } />
      <div className={`grid-item two ${box1}`} onClick={() => {press(1); clearBoxes()} } />
      <div className={`grid-item three ${box2}`} onClick={() => {press(2); clearBoxes()} } />
      <div className={`grid-item four ${box3}`} onClick={() => {press(3); clearBoxes()} } /> 

    </div>
  )
} 

export default Boxes;


