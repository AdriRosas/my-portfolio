import styles from "./Contact.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export function Contact() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContact}>
        <h1 className={styles.contactHeader}>
          Contácta<strong>Me</strong>
        </h1>
      </div>
      <div className={styles.containerF}>
        <Form className={styles.formCont}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              className={styles.inputForm}
              style={{ margin: "0px" }}
              placeholder="Nombre"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="email"
              className={styles.inputForm}
              style={{ margin: "0px" }}
              placeholder="Correo"
            />
          </Form.Group>

          <Form.Group
            className="mb-3"
            label="Cuéntame tu idea"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              label="Cuéntame tu idea"
              as="textarea"
              style={{ height: "100px" }}
              className={styles.inputForm}
              rows={3}
            />
          </Form.Group>
          <Button variant="outline" type="submit" className={styles.send}>
          <p className={styles.sendMe}>Enviar</p>
            <img src={require("../images/icons/flecha-correcta.png")} alt="go" />
          </Button>
        </Form>
        <span className={styles.span}></span>
        <div className={styles.socialMedia}>
          <a
            href="https://api.whatsapp.com/send?phone=5587945478"
            target="_blank"
            rel="noreferrer"
            className={styles.iconsB}
            
          >
          </a>
          <a
            href="https://www.linkedin.com/in/adriana-rosasf/"
            target="_blank"
            rel="noreferrer"
            className={styles.iconsB}
          >
          </a>
          <a
            href="https://twitter.com/p1zz4crypt"
            target="_blank"
            rel="noreferrer"
            className={styles.iconsB}
          >
          </a>
        </div>
      </div>
      <div className={styles.contactImage}>
        <img src={require("../images/graf-b-min.png")} alt="Adri" />
      </div>
    </div>
  );
}
