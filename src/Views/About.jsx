import styles from "./About.module.css";
export function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutTextContainer}>
          <h1 className={styles.aboutHeader}>
            Sobre <strong>Mí</strong>
          </h1>
          <p className={styles.aboutMeDescription}>
            Front-end Developer con 3 años de experiencia en el desarrollo de
            aplicaciones web con Javascript, Vue y React. Tengo un gran interés
            en tecnologías como Blockchain y modelos de aprendizaje automático.
          </p>
          <div className={styles.aboutMeDescription}>
            SKILLS:
            <br />
            <strong>Lenguajes de Programación:</strong> Intermedio: Javascript;
            Básico: Solidity
            <br />
            <strong>Frameworks:</strong> Intermedio: Vue 2; Básico: Vue 3, React
            <br />
            <strong>Base de Datos:</strong> Firebase
            <br />
            <strong>Herramientas:</strong> Git, GitFlow, Vuex, Vuetify, Slack,
            Kanban, Adobe XD, Figma, Photoshop, Illustrator, Stable Diffusion
            <br />
            <strong>Idiomas:</strong> Básico: Inglés; Nativo: Español
          </div>
          <div className={styles.btnCv}>
            <div className={styles.open}></div>
          </div>
        </div>
        <div className={styles.imgMe}>
          <img
            className={styles.coverBackgroundImage}
            src={require("../images/adr-min.webp")}
            alt="Adri"
          />
        </div>
      </div>
    </div>
  );
}
