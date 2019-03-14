import React from 'react';
import '../App.css';
import pyramids from '../images/pyramids.jpg';

const Image = ({imageOpacity}) => {
  return (
    <div className="image-box">

      <img src={pyramids} style={{ height: '400px', width: '400px', transition: '2s ease-in-out', opacity: imageOpacity}} alt="reward" />

    </div>
  )
} 

export default Image;