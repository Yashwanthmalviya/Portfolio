import React from "react";
import LogoX from "../../assets/images/logo-x.svg";
import LogoLi from "../../assets/images/logo-li.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-cont">
        <div className="footer-socials">
            <div >Find me in:</div>
            <a className="socials-logo" href=""><img src={LogoX} alt="" /></a>
            <a className="socials-logo" href=""><img src={LogoLi} alt="" /></a>
        </div>
    </div>
  );
};
 
export default Footer;
