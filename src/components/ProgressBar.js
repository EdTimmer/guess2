import React from 'react';
import '../App.css';

function ProgressBar ({correctCount}) {
  
  
  let c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24;
  let circlesArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24];

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i] = "transparent";
  }

  for (let i = 0; i < correctCount; i++) {
    circlesArray[i] = "#7FDBFF";
  }

  return (
    <div className="flex-container">

      <span className="circle" style={{backgroundColor: circlesArray[0] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[1] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[2] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[3] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[4] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[5] }} />
      <span className="circle" style={{backgroundColor: circlesArray[6] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[7] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[8] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[9] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[10] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[11] }} />
      <span className="circle" style={{backgroundColor: circlesArray[12] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[13] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[14] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[15] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[16] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[17] }} />
      <span className="circle" style={{backgroundColor: circlesArray[18] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[19] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[20] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[21] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[22] }} /> 
      <span className="circle" style={{backgroundColor: circlesArray[23] }} />

    </div>
  )  
}

export default ProgressBar;


