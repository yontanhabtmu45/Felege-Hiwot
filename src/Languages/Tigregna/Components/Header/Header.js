import React, { useState } from "react";
import  "./Header.css";
import logo from "../../assets/Img/LOGO/FH-LOGO.png";
import LowerHeader from "./LowerHeader";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="main_header">
      <div className="inner-header">
        <nav className="nav-list">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="fh_logo" />
              <p>በኢ/ኦ/ተ/ቤ/ክ በለቡ ደብረ ሰላም መድኃኔዓለም ቤተ ክርስቲያን የፈለገ ሕይወት ሰ/ት/ቤት</p>
            </a>
          </div>
          <ul className={ isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <a href="/" className="active">ዋና ገጽ</a>
            </li>
            <li>
              <a href="/About">ስለ ሰ/ት/ቤቱ</a>
            </li>
            <li>
              <a href="/Services">አገልግሎቶች</a>
            </li>
            <li>
              <a href="/History">ታሪካችን</a>
            </li>
            <div>
              <li>
                <a href="#">
                  <select>
                    <option>አማርኛ</option>
                    <option>እንግሊዝኛ</option>
                    <option>ኦሮምኛ</option>
                    <option>ትግርኛ</option>
                  </select>
                </a>
              </li>
            </div>
            <li>
              <a href="#contact">ያግኙን</a>
            </li>
          </ul>
          <div className="wrapper_list" >
            <RiMenu3Fill size={36}  onClick={toggleMenu}/>
          </div>
        </nav>
        <LowerHeader />
      </div>
    </div>
  );
}

export default Header;
