import styles from "./Home.module.css";
export function Home() {
  return (
    <div className={styles.cover} id="home">
      <div className={styles.coverBackground}>
        {/* <img
          className={styles.coverBackgroundImage}
          src={require("../images/astro.png")}
          alt="Robot"
        /> */}
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
