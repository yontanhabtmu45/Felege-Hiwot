import React from "react";
import classes from "./Main.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/img";

function Main() {
  return (
    <div className={classes.main_highlight}>
      <div className={classes.carsoul_effect}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          showThumbs={false}
          >
          {img.map((imgItem) => {
            return <img src={imgItem} />;
          })}
            <p>
            እንኳን በደኅና መጡ !
            </p>
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
