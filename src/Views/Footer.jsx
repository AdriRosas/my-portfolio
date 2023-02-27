import styles from "./Footer.module.css";
export function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;

  return (
    <div className={styles.contFooter}>
      <div className={styles.txtFooter}>
        <p>Hecho con 💚 por Adriana</p>
        <p>{date}</p>
      </div>
    </div>
  );
}
