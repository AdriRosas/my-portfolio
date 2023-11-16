import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./ModalStyles.css";
import { RiExternalLinkLine } from "react-icons/ri";
import { CgCloseR } from "react-icons/cg";

function BorregoLavinModal(props) {
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
              href="https://borregolavinabogados.com/"
              target="_blank"
              className="linkModal"
              rel="noreferrer"
            >
              <p className="titleModal">
                Borrego <strong>Lavin</strong>{" "}
                <RiExternalLinkLine className="small" />
              </p>
            </a>

            <Button
              onClick={props.onHide}
              variant="outline-dark"
              color="black"
              size="lg"
            >
              <CgCloseR />
            </Button>
          </div>
          <p className="txtUno">
            Despacho jurídico especializado en asuntos relacionados a la materia
            penal.
          </p>
          <p className="txtDos">
            Maquetación, Desarrollo de interfaz para sitio web y web App con{" "}
            <strong>Vuetify</strong>
          </p>
        </div>
        <div className="imagesBody">
          <img src={require("../../images/modal-images/bl3.jpg")} alt="go" />
          <img src={require("../../images/modal-images/bl2.jpg")} alt="go" />
          <img src={require("../../images/modal-images/bl1.jpg")} alt="go" />
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default BorregoLavinModal;