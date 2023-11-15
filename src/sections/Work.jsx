import React, { useState } from "react";
// import { Carousel } from "../components/Carousel";
import styles from "../components/styles/Work.module.css";
// import Televison from "../components/Television"
import Swipe from "../components/Swipe"
import ModalGeneral from "../components/modals/ModalGeneral"


export function Work() {
  const [activeSlide] = useState(0);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [projectId, setProjectId] = useState(null); 

  function handleShow(breakpoint, projectId) {
    setFullscreen(breakpoint);
    setProjectId(projectId)
    setShow(true);
}

  // Callback function to update the active slide position
  // const handleSlideChange = (index) => {
  //   setActiveSlide(index);
  // };

  return (
    <div className={styles.myworkContainer} id="work">
      <h1 className={styles.workHeader}>
        Mi <strong>Experiencia </strong>
      </h1>
      <div className={styles.carouselContain} style={{ backgroundColor: getColorForSlide(activeSlide) }}>
        <div className={styles.myworkContent}>
        <Swipe handleShow={handleShow} />
        <ModalGeneral projectId={projectId} fullscreen={fullscreen} show={show} onHide={() => setShow(false)} />

          {/* <Carousel onSlideChange={handleSlideChange} /> */}
          {/* <Televison/> */}
        </div>
      </div>
    </div>
  );
}

// Define a function to determine the background color based on the active slide
function getColorForSlide(activeSlide) {
  // You can define different colors for each slide position
  switch (activeSlide) {
    case 0:
      return "transparent";
    case 1:
      return "blue";
    case 2:
      return "green";
    case 3:
      return "yellow";
    default:
      return "white"; // Default color
  }
}