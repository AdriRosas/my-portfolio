import styles from "./Work.module.css";
import { Carousel } from "../components/Carousel";


export function Work() {
  return (
    <div className={styles.myworkContainer} id="work">
      <h1 className={styles.workHeader}>
        Mi <strong>Experiencia </strong>
      </h1>
      <div className={styles.myworkContent}>
        <div className={styles.carouselCont}>
          <div className={styles.carouselContain}>
          <div className={styles.robotImg}>
            
          <img src={require("../images/graf-b-min.png")} alt="go" />
          </div>
            <Carousel />
            {/* <div className=""></div> */}
          <div className={styles.robotImgDos}>
          <img src={require("../images/graf-b-min2.png")} alt="go" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
