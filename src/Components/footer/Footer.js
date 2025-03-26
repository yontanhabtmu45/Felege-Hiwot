import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/Img/LOGO/FH-LOGO.png";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className={classes.footer_wrapper}>
        <div className={classes.inner_footer}>
          <div className={classes.footer_logo}>
            <a href="/">
              <img src={logo} />
            </a>
            <ul>
              <li>
                <a href="">
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.class_wrapper}>
            <h2>ማውጫ</h2>
            <div className={classes.class_links}>
              <ul>
                <li>
                  <a href="#">ዋና ገጽ</a>
                </li>
                <li>
                  <a href="#">ስለ ሰ/ት/ቤቱ</a>
                </li>
                <li>
                  <a href="#">አገልግሎቶች</a>
                </li>
                <li>
                  <a href="#">ታሪካችን</a>
                </li>
                <li>
                  <a href="#">ያግኙን</a>
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
                      <a href="#">ጽሕፈት ቤት</a>
                    </li>
                    <li>
                      <a href="#">ሕጻናት እና ታዳጊ</a>
                    </li>
                    <li>
                      <a href="#">ትምህርት ክፍል</a>
                    </li>
                    <li>
                      <a href="#">ጸሎት እና መዝሙር ክፍል</a>
                    </li>
                  </ul>
                </div>
                <div className={classes.breaker_2}>
                  <ul>
                    <li>
                      <a href="#">ኪነ-ጥበብ ክፍል</a>
                    </li>
                    <li>
                      <a href="#">ግንኙነት ክፍል</a>
                    </li>
                    <li>
                      <a href="#">ልማት ክፍል</a>
                    </li>
                    <li>
                      <a href="#">ንብረት ክፍል</a>
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
