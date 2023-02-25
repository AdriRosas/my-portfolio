import styles from "./Home.module.css";
// import ImageRobot from "../images/back-home-min.png"
export function Home() {
  return (
    <div className={styles.cover}>
      <div className={styles.coverBackground}>
        <img
        className={styles.coverBackgroundImage}
        src={require('../images/back-home-min (1).webp')}
        alt="Robot"
      />
      </div>
      <div className={styles.coverContentWrapper}>
        <h1 className={styles.coverContent}>
          <p className={styles.coverTitle}>
            Adriana <br />
            <span>Rosas</span>
          </p>
          <p className={styles.coverSubtitle}>Front end developer</p>
        </h1>
      </div>
    </div>
  );
}
