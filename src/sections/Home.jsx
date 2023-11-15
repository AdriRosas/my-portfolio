import styles from "../components/styles/Home.module.css";
export function Home() {
  return (
    <div className={styles.cover} id="home">
      <div className={styles.coverCont}>
      
      <div className={styles.coverContentWrapper}>
        <h1 className={styles.coverContent}>
          <p className={styles.coverTitle}>
            Adriana <br />
            <span>Rosas</span>
          </p>
          <p className={styles.coverSubtitle}>Front end developer</p>
        </h1>
      </div>
      <div className={styles.coverBackground}>
        {/* <img
          className={styles.coverBackgroundImage}
          src={require("../images/robi.png")}
          alt="Robot"
        /> */}
      </div>
      </div>
    </div>
  );
}
