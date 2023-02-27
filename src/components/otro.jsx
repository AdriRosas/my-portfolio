import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
export function Carousel() {
  return (
    <div className={styles.algo}>
      <div className={styles.container}>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
        {/* <div className={styles.card}>
          <div className={styles.contentCard}>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.txtCard}>
              <p className={styles.title}>Tienda Legal</p>
              <p className={styles.txtUno}>
                Plataforma especializada en gestión legal automatizada para
                empresas y despachos
              </p>
              <p className={styles.txtDos}>
                Desarrollo de interfaz y conexión con base de datos con{" "}
                <strong>Vue</strong>, <strong>Vuex</strong> y{" "}
                <strong>Firebase</strong>
              </p>
              <a
                href="https://www.tlegal.app"
                target="_blank"
                className={styles.link}
                rel="noreferrer"
              >
                <img
                  src={require("../images/next (1).png")}
                  alt="go"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.contentCard}>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.txtCard}>
              <p className={styles.title}>Alegantto</p>
              <p className={styles.txtUno}>
                Despacho de Abogados especialistas en derecho concursal
              </p>
              <p className={styles.txtDos}>
                Desarrollo de interfaz y conexión con base de datos con{" "}
                <strong>Vue</strong> y <strong>Vuetify</strong>
              </p>
              <a
                href="http://alegantto.com/"
                target="_blank"
                className={styles.link}
                rel="noreferrer"
              >
                <img
                  src={require("../images/next (1).png")}
                  alt="go"
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.contentCard}>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.txtCard}>
              <p className={styles.title}>Reclutachat</p>
              <p className={styles.txtUno}>
                Sistema de automatización inteligente para el reclutamiento
                masivo
              </p>
              <p className={styles.txtDos}>
                Desarrollo de interfaz y conexión con base de datos con{" "}
                <strong>Vue</strong>, <strong>Vuex</strong> y{" "}
                <strong>Firebase</strong>
              </p>
              <a
                href="https://www.reclutachat.com/"
                target="_blank"
                className={styles.link}
                rel="noreferrer"
              >
                <img
                  src={require("../images/next (1).png")}
                  alt="go"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.contentCard}>
            <div className={styles.bar}>
              <div className={styles.emptybar}></div>
              <div className={styles.filledbar}></div>
            </div>
            <div className={styles.txtCard}>
              <p className={styles.title}>Borrego Lavín</p>
              <p className={styles.txtUno}>
                Despacho jurídico especializado en la atención integral de
                asuntos relacionados a la materia penal
              </p>
              <p className={styles.txtDos}>
                Desarrollo de interfaz y conexión con base de datos con{" "}
                <strong>Vue</strong> y <strong>Vuetify</strong>
              </p>
              <a
                href="https://borregolavinabogados.com/"
                target="_blank"
                className={styles.link}
                rel="noreferrer"
              >
                <img
                  src={require("../images/next (1).png")}
                  alt="go"
                />
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
