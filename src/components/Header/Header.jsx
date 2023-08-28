import React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import LogoSocar from '../svgComponents/LogoSocar';
import headerStyle from './Header.module.scss';
import AccountLogo from '../svgComponents/AccountLogo'
import AccountBox from '../AccountBox/AccountBox';
import { AuthContext } from '../AuthContext';




const Header = (props) => {

  const { logout } = useContext(AuthContext);

  // const [isHover, setIsHover] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHover(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsHover(false);
  // };

  // const styleforButton = {
  //   backgroundColor: isHover ? "#FFB931" : "transparent",
  //   color: isHover ? "white" : "black",
  //   cursor: "pointer",
  // }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const user = JSON.parse(localStorage.getItem("users"));


  const clickonLogo = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen)
    console.log(user)
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const cursorStyle = isHovered ? { "cursor": 'pointer' } : {};

  return (
    <header>
      <nav>
        <div className={headerStyle.logoSP}>
          <LogoSocar />
        </div>

        <div className={headerStyle.navWithUser}>
          <ul className={headerStyle.navLinksContainer} >
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className={headerStyle.buttonUser}>
            {!localStorage.getItem("isLogged") ? <Link to='/login'>
              <button>Log in</button>
            </Link> : null}
            {localStorage.getItem("isLogged") ? <AccountLogo
              onClick={clickonLogo}
              style={cursorStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            /> : null}
            {isDropdownOpen && (<AccountBox
              name={user[0].name}
              surname={user[0].surname}
              username={user[0].username}
              sapID={user[0].sapID}
              logout={logout}
              cursorStyle={cursorStyle}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
            )}
          </div>
        </div>
      </nav>



    </header>
  )
}

export default Header