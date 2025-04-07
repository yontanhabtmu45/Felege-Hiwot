import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/Img/LOGO/FH-LOGO.png";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={classes.footer_wrapper}>
        <div className={classes.inner_footer}>
          <div className={classes.footer_logo}>
            <Link to="/">
              <img src={logo} />
            </Link>
            <ul>
              <li>
                <Link to="">
                  <FaTelegram />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="">
                  <FaTiktok />
                </Link>
              </li>
            </ul>
          </div>
          <div className={classes.class_wrapper}>
            <h2>ማውጫ</h2>
            <div className={classes.class_links}>
              <ul>
                <li>
                  <Link to="/">ዋና ገጽ</Link>
                </li>
                <li>
                  <Link to="/about">ስለ ሰ/ት/ቤቱ</Link>
                </li>
                <li>
                  <Link to="/services">አገልግሎቶች</Link>
                </li>
                <li>
                  <Link to="/history">ታሪካችን</Link>
                </li>
                <li>
                  <Link to="/contact">ያግኙን</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.class_wrapper}>
            <h2>አገልግሎት ክፍሎች</h2>
            <div className={classes.class_links}>
              <div className={classes.breakers}>
                <div className={classes.breaker_1}>
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
                  </ul>
                </div>
                <div className={classes.breaker_2}>
                  <ul>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
