import React from 'react';
import "../components/styles/Television.css"
// import { Carousel } from './Carousel';


function Television() {
  
  return (
    <div className="container">
      <div className="tv">
        <input type="checkbox" className="switchinput" defaultChecked />
        <div className="switch"></div>
        <div className="video">
          {/* <Carousel/> */}
          <h1>Próximamente</h1>
        </div>
        <div className="cover"></div>
      </div>
    </div>
  );
}

export default Television;