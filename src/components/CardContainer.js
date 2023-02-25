import { Carousel } from "react-carousel3";

const style = {
  width: 297,
  height: 296,
};

export function CarouselCont(){
  return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'transparent',
    }}
  >
    <div style= {{ display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', }}>
    <Carousel  height={360} width={480} xOrigin={50} yOrigin={50} >
      <div key={1} style={{marginTop:'12%'}}>
       <a href="."> <img alt="gg" src={require('../images/backfull.png')} /></a>
      </div>
      <div key={2} style={{marginTop:'12%'}}>
        <img alt="ff" src={require('../images/alegantto.png')} />
      </div>
      <div key={3} style={{marginTop:'12%'}}>
        <img alt="dd" src={require('../images/reclutachat.png')} />
      </div>
      <div key={4} style={{marginTop:'12%'}}>
        <img alt="dd" src={require('../images/borrego-lavin.png')} />
      </div>
    </Carousel>
    </div>
  </div>
);
}