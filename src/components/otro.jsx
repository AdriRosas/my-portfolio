import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";
import { EffectFade, Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
export function Carousel() {
  return (
    <div className={styles.container}>
      
      <div className={styles.contentSwiper}>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide className={styles.item}>
            <div className={styles.card}>
              <div className={styles.tl}>
                <div className={styles.contentCard}>
                  <div className={styles.bar}>
                    <div className={styles.emptybar}></div>
                    <div className={styles.filledbar}></div>
                  </div>
                  <div className={styles.txtCard}>
                    <p className={styles.title}>Tienda Legal</p>
                    <p className={styles.txtUno}>
                      Plataforma especializada en gestión legal automatizada
                      para empresas y despachos
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
                      <p className={styles.visitar}>Visitar</p>
                      <img
                        src={require("../images/icons/flecha-correcta.png")}
                        alt="go"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
            <div className={styles.card}>
              <div className={styles.al}>
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
                      <p className={styles.visitar}>Visitar</p>
                      <img
                        src={require("../images/icons/flecha-correcta.png")}
                        alt="go"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
            <div className={styles.card}>
              <div className={styles.rc}>
                <div className={styles.contentCard}>
                  <div className={styles.bar}>
                    <div className={styles.emptybar}></div>
                    <div className={styles.filledbar}></div>
                  </div>
                  <div className={styles.txtCard}>
                    <p className={styles.title}>Reclutachat</p>
                    <p className={styles.txtUno}>
                      Sistema de automatización inteligente para el
                      reclutamiento masivo
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
                      <p className={styles.visitar}>Visitar</p>
                      <img
                        src={require("../images/icons/flecha-correcta.png")}
                        alt="go"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.item}>
            <div className={styles.card}>
              <div className={styles.bl} id="bl">
                <div className={styles.contentCard}>
                  <div className={styles.bar}>
                    <div className={styles.emptybar}></div>
                    <div className={styles.filledbar}></div>
                  </div>
                  <div className={styles.txtCard}>
                    <p className={styles.title}>Borrego Lavín</p>
                    <p className={styles.txtUno}>
                      Despacho jurídico especializado en asuntos relacionados a
                      la materia penal.
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
                      <p className={styles.visitar}>Visitar</p>
                      <img
                        src={require("../images/icons/flecha-correcta.png")}
                        alt="go"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.eternaCard}>
        {/* <div className={styles.eternaImg}>
          <img src={require("../images/eterna-mini (1).png")} alt="go" />
        </div> */}
        <div className={styles.eternaLinks}>
          <a
            href="https://eterna.digital/"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            <p className={styles.titleCrd}>Eterna Digital</p>
          </a>
          <p className={styles.txtCrd}>Octubre 2019 - Noviembre 2023</p>
          <a
            href="https://eterna.digital/"
            target="_blank"
            className={styles.link}
            rel="noreferrer"
          >
            <p className={styles.visitar}>Visitar</p>
            <img
              src={require("../images/icons/flecha-correcta.png")}
              alt="go"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
