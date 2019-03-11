import React, { Component } from 'react';
import './App.css';

class Boxes extends Component {

  render() {
    const { press, correctBox0, correctBox1, correctBox2, correctBox3, clearBoxes } = this.props;

    return (
      <div className="grid-container body">

        <div className={`grid-item one ${correctBox0}`} onClick={() => {press(0); clearBoxes()} } />
        <div className={`grid-item two ${correctBox1}`} onClick={() => {press(1); clearBoxes()} } />
        <div className={`grid-item three ${correctBox2}`} onClick={() => {press(2); clearBoxes()} } />
        <div className={`grid-item four ${correctBox3}`} onClick={() => {press(3); clearBoxes()} } /> 

      </div>
    )
  }
}

export default Boxes;


