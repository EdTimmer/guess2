import React from 'react';
import '../App.css';
import pyramids from '../images/pyramids.jpg';

const Image = () => {
  return (
    <div className="image-box">

      <img src={pyramids} style={{ height: '400px', width: '400px' }} alt="reward" />

    </div>
  )
} 

export default Image;