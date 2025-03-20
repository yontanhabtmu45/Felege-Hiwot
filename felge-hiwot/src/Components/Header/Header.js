import React from "react";
import classes from "./Header.module.css";
import logo from "../../assets/Img/LOGO/FH-LOGO.png";

function Header() {
  return (
    <div className={classes.main_header}>
      <div className={classes.inner_header}>
        <nav className={classes.nav_list}>
          <div className={classes.logo}>
            <a href="#">
              <img src={logo} alt="fh_logo" />{" "}
              <p>በኢ/ኦ/ተ/ቤ/ክ በለቡ ደብረ ሰላም መድኃኔዓለም ቤተ ክርስቲያን የፈለገ ሕይወት ሰ/ት/ቤት</p>
            </a>
          </div>
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
              <a href="#">ቋንቋ</a>
            </li>
            <li>
              <a href="#">ያግኙን</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
