import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalStyles.css";
import { RiExternalLinkLine } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";

function TiendaLegalModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="cardModal"
    >
      <Modal.Body
        className="bodyModal"
        id="contained-modal-title-vcenter"
        scrollable={true}
      >
        <div className="headerModal">
        <div className="actionModal">      
          <a
            href="https://www.tlegal.app"
            target="_blank"
            className="linkModal"
            rel="noreferrer"
          >
            <p className="titleModal">
              Tienda <strong>Legal</strong> <RiExternalLinkLine className="small"/>
            </p>
          </a>
         
          <Button onClick={props.onHide} variant="outline-dark"  color="black" size="lg"><CgCloseR/></Button>
        </div>
          <p className="txtUno">
            Plataforma especializada en gestión legal automatizada para empresas
            y despachos.
          </p>
          <p className="txtDos">
            Maquetación, Desarrollo de interfaz para sitio web y web App con{" "}
            <strong>Vuetify</strong> <br />
            Conexión con base de datos con <strong>Vue</strong>,{" "}
            <strong>Vuex</strong> y <strong>Firebase</strong>
          </p>
        </div>
        <div className="imagesBody">
          <img src={require("../../images/modal-images/tl3.jpg")} alt="go" />
          <img src={require("../../images/modal-images/tl1.PNG")} alt="go" />
          <img src={require("../../images/modal-images/tl2.jpg")} alt="go" />
        </div>
        
      </Modal.Body>
    </Modal>
  );
}
export default TiendaLegalModal;
