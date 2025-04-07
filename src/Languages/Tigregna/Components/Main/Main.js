import React from "react";
import classes from "./Main.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/img";
import Layout from "../Layout/Layout";
import Contact from "../../Pages/Contacts/Contact";

function Main() {
  return (
    <Layout>
      <div className={classes.main_highlight}>
        <div className={classes.carsoul_effect}>
          {/* <div className={classes.quote}>
          <p>
          እንኳን በደኅና መጡ !
          </p>

          </div> */}
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
          >
            {img.map((imgItem) => {
              return <img src={imgItem} />;
            })}
          </Carousel>
        </div>
      </div>
      <Contact/>
    </Layout>
  );
}

export default Main;
