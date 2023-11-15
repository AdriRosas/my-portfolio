import React from "react";
import Button from "react-bootstrap/Button";
import "../components/styles/Swipe.css";

const Swipe = ({ handleShow }) => {
    const handleClick = (projectId) => {
        handleShow(true, projectId);
        console.log(projectId, "id desde swipe");
    };

    return (
        <div className="container">
            <div className="card card0">
                <div className="cont">
                    <h2>
                        Eterna <b>Digital</b>
                    </h2>

                    <div className="info-and-icons">
                        <div className="info">
                            <p>
                                Servicios y consultoría de TI
                                <br />
                                Mexico City, Mexico City
                            </p>
                            <Button
                                className="button me-2 mb-2"
                                onClick={() => handleClick(1)}
                            >
                                Ver proyectos
                            </Button>
                        </div>
                        <div className="icons">
                            <a
                                className="link-sm"
                                href="https://eterna.digital/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-link fa-lg" aria-hidden="true"></i>
                            </a>
                            <a
                                className="link-sm"
                                href="https://mx.linkedin.com/company/eterna-digital"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                            </a>
                            <a
                                className="link-sm"
                                href="https://www.facebook.com/eternadigital"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card0 card1">
                <div className="cont">
                    <h2>
                        SPS <b>Solutions</b>
                    </h2>

                    <div className="info-and-icons">
                        <div className="info">
                            <p>
                                Servicios y consultoría de TI
                                <br />
                                Mexico City, Mexico City
                            </p>
                            <Button
                                className="button me-2 mb-2"
                                onClick={() => handleClick(2)}
                            >
                                Ver proyectos
                            </Button>
                        </div>
                        <div className="icons">
                            <a
                                className="link-sm"
                                href="https://spsolutions.com.mx/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-link fa-lg" aria-hidden="true"></i>
                            </a>
                            <a
                                className="link-sm"
                                href="https://www.linkedin.com/company/912429/admin/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                            </a>
                            <a
                                className="link-sm"
                                href="https://www.facebook.com/spsolutionsmx"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Swipe;
