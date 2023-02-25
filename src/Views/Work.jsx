import styles from "./Work.module.css";
import {CarouselCont} from "../components/CardContainer"

export function Work() {
  return (
    <div className={styles.myworkContainer}>
      <div className={styles.myworkContent}>
        <h1 className={styles.aboutHeader}>
          Mi <span>Experiencia </span>
        </h1>
        <div>
            <div className={styles.divWidth}>
                
            </div>
        <CarouselCont />
        </div>
      </div>
    </div>
  );
}
