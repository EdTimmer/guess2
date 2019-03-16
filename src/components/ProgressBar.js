import React from 'react';
import '../App.css';

function ProgressBar ({correctCount, totalCount}) {
  
  
  let c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24;
  let circlesArray = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24];

  let b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24;
  let barsArray = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24];

  for (let i = 0; i < circlesArray.length; i++) {
    circlesArray[i] = "transparent";
  }

  for (let i = 0; i < correctCount; i++) {
    circlesArray[i] = "#7FDBFF";
  }

  for (let i = 0; i < barsArray.length; i++) {
    barsArray[i] = "transparent";
  }

  barsArray[totalCount - 1] = "white";

  return (
    <div>  

      <div className="flex-container">
        <span className="count" /> 
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count">6</span>
        <span className="count" /> 
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count">12</span>
        <span className="count" /> 
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count">18</span>
        <span className="count" /> 
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count" />
        <span className="count" />
      </div>
   
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

      <div className="flex-container">
        <span className="bar" style={{backgroundColor: barsArray[0] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[1] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[2] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[3] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[4] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[5] }} />
        <span className="bar" style={{backgroundColor: barsArray[6] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[7] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[8] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[9] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[10] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[11] }} />
        <span className="bar" style={{backgroundColor: barsArray[12] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[13] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[14] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[15] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[16] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[17] }} />
        <span className="bar" style={{backgroundColor: barsArray[18] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[19] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[20] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[21] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[22] }} /> 
        <span className="bar" style={{backgroundColor: barsArray[23] }} />
      </div>
          
    </div>
  )  
}

export default ProgressBar;


