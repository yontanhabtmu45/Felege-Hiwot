import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/Img/LOGO/FH-LOGO.png";
import LowerHeader from "./LowerHeader";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main_header">
      <div className="inner-header">
        <nav className="nav-list">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="fh_logo" />
              <p>በኢ/ኦ/ተ/ቤ/ክ በለቡ ደብረ ሰላም መድኃኔዓለም ቤተ ክርስቲያን የፈለገ ሕይወት ሰ/ት/ቤት</p>
            </Link>
          </div>
          <ul className={isOpen ? "nav-link active" : "nav-link"}>
            <li>
              <Link to="/" className="active">
                ዋና ገጽ
              </Link>
            </li>
            <li>
              <Link to="/About">ስለ ሰ/ት/ቤቱ</Link>
            </li>
            <li
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              className="dropdown"
            >
              <Link
                to="/services/HQ"
              >
                አገልግሎቶች
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link to="/History">ታሪካችን</Link>
            </li>
            <div>
              <li>
                <Link to="#">
                  <select>
                    <option>አማርኛ</option>
                    <option>እንግሊዝኛ</option>
                    <option>ኦሮምኛ</option>
                    <option>ትግርኛ</option>
                  </select>
                </Link>
              </li>
            </div>
            <li>
              <Link to="/contact">ያግኙን</Link>
            </li>
          </ul>
          <div className="wrapper_list">
            <RiMenu3Fill size={36} onClick={toggleMenu} />
          </div>
        </nav>
        <LowerHeader />
      </div>
    </div>
  );
}

export default Header;
