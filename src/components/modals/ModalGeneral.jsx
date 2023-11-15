import React from "react";
import Modal from "react-bootstrap/Modal";
import { Carousel } from "../../components/Carousel";
import Television from "../../components/Television";

function ModalGeneral({ show, onHide, fullscreen, projectId }) {
    console.log(projectId, "id")

    return (
        <>
            <Modal show={show} fullscreen={fullscreen} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: "aliceblue", fontFamily: "Advent Pro", }}>
                        {projectId === 1 ? "Eterna Digital" : "SPS Solutions"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{display: "flex", justifyContent: "center"}}>
                    {projectId === 1 && <Carousel />}
                    {/* {projectId === 2 && <Television />} */}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalGeneral;
