import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import TiendaLegalModal from "../components/modals/TiendaLegal";
import AleganttoModal from "./modals/AleganttoModal";
import ReclutaModal from "./modals/ReclutaModal";
import BorregoLavinModal from "./modals/BorregoLavinModal";
import { RiExternalLinkLine } from "react-icons/ri";
import styles from "./Carousel.module.css";
import { EffectFade, Navigation, Pagination } from "swiper";
import { AiOutlineEye } from "react-icons/ai";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
export function Carousel() {
  const [modalTlShow, setModalTlShow] = useState(false);
  const [modalAlShow, setModalAlShow] = useState(false);
  const [modalRcShow, setModalRcShow] = useState(false);
  const [modalBlShow, setModalBlShow] = useState(false);
  const pagination = {
    clickable: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.contentSwiper}>
        <Swiper
          pagination={pagination}
          effect={"fade"}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.tl}>
                <button
                  className={styles.cta}
                  onClick={() => setModalTlShow(true)}
                >
                  <AiOutlineEye className={styles.icon} />
                  <span className={styles.buttonText}>Detalles</span>
                </button>
                <TiendaLegalModal
                  show={modalTlShow}
                  onHide={() => setModalTlShow(false)}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.al}>
                <button
                  className={styles.cta}
                  onClick={() => setModalAlShow(true)}
                >
                  <AiOutlineEye className={styles.icon} />
                  <span className={styles.buttonText}>Detalles</span>
                </button>
                <AleganttoModal
                  show={modalAlShow}
                  onHide={() => setModalAlShow(false)}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.rc}>
                <button
                  className={styles.cta}
                  onClick={() => setModalRcShow(true)}
                >
                  <AiOutlineEye className={styles.icon} />
                  <span className={styles.buttonText}>Detalles</span>
                </button>
                <ReclutaModal
                  show={modalRcShow}
                  onHide={() => setModalRcShow(false)}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>
              <div className={styles.bl}>
                <button
                  className={styles.cta}
                  onClick={() => setModalBlShow(true)}
                >
                  <AiOutlineEye className={styles.icon} />
                  <span className={styles.buttonText}>Detalles</span>
                </button>
                <BorregoLavinModal
                  show={modalBlShow}
                  onHide={() => setModalBlShow(false)}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.eternaCard}>
        <div className={styles.eternaLinks}>
          <a
            href="https://eterna.digital/"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            <p className={styles.titleCrd}>Eterna Digital</p><RiExternalLinkLine />
          </a>
          <p className={styles.txtCrd}>Octubre 2019 -<br/> Noviembre 2023</p>
          
        </div>
      </div>
    </div>
  );
}
