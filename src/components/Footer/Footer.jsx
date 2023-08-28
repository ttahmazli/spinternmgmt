import React from 'react';
import styleFooter from "./Footer.module.scss";
import { Link } from 'react-router-dom';
import LogoSocar from '../svgComponents/LogoSocar';


const Footer = () => {
    return (
        <div className={styleFooter.footerCont}>
            <div className={styleFooter.logoSP}>
                <LogoSocar color="rgba(255, 255, 255, 0.3)"/>
            </div>
            <div className={styleFooter.navCont}>
                <ul className={styleFooter.navLinksContainer} >
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
            </div>
            <div className={styleFooter.copyText}>
                <p>All rights reserved 2023 &copy;</p>
            </div>
        </div>
    )
}

export default Footer