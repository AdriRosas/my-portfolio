import styles from "./Work.module.css";
// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Collapse from "react-bootstrap/Collapse";
import { Carousel } from "../components/Carousel";

export function Work() {
  // const [open, setOpen] = useState(false);
  return (
    <div className={styles.myworkContainer} id="work">
      <h1 className={styles.workHeader}>
        Mi <strong>Experiencia </strong>
      </h1>
      <div className={styles.myworkContent}>
        <div className={styles.carouselCont}>
          <div className={styles.robotImg}></div>
            <Carousel />
        </div>
      </div>
    </div>
  );
}
