import React from "react";
import Styles from "./MainCarousel.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function MainCarousel({ totalSlides, visibleSlides, array }) {
  return (
    <div className={Styles.carousel_main}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={totalSlides}
        visibleSlides={visibleSlides}
        isPlaying={true}
        infinite={true}
      >
        <Slider className={Styles.slider}>
          {array.map((elem, i) => {
            return (
              <div key={i}>
                <Slide index={i} className={Styles.slide}>
                  <img src={elem} alt="poster" />
                </Slide>
              </div>
            );
          })}
        </Slider>
        <div className={Styles.prev_btn}>
          <ButtonBack style={{ height: "100%", width: "100%" }}>
            <AiOutlineLeft style={{ margin: "auto" }} />
          </ButtonBack>
        </div>
        <div className={Styles.next_btn}>
          <ButtonNext style={{ height: "100%", width: "100%" }}>
            <AiOutlineRight style={{ margin: "auto" }} />
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default MainCarousel;
