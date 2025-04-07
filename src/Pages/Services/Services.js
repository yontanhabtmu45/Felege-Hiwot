import React from "react";
import classes from "./Services.module.css";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section className={classes.layout}>
        <div className={classes.main_class}>
          <h2>አገልግሎት ክፍሎች</h2>
          <div className={classes.inner_class}>
            <div>
              <ul>
                <li>
                  <Link to="/services/HQ">ጽሕፈት ቤት</Link>
                </li>
                <li>
                  <Link to="/services/kids">ሕጻናት እና ታዳጊ</Link>
                </li>
                <li>
                  <Link to="/services/education">ትምህርት ክፍል</Link>
                </li>
                <li>
                  <Link to="/services/prayer">ጸሎት እና መዝሙር ክፍል</Link>
                </li>
                <li>
                  <Link to="/services/theater">ኪነ-ጥበብ ክፍል</Link>
                </li>
                <li>
                  <Link to="/services/social">ግንኙነት ክፍል</Link>
                </li>
                <li>
                  <Link to="/services/Lemat">ልማት ክፍል</Link>
                </li>
                <li>
                  <Link to="/services/property">ንብረት ክፍል</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
