import React from "react";
import LogoX from "../../assets/images/logo-x.svg";
import LogoLi from "../../assets/images/logo-li.svg";
import LogoGit from "../../assets/images/logo-git.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-cont">
      <div className="footer-socials">
        <div className="footer-text">find me in:</div>
        <a className="socials-logo" href="x.com"><img src={LogoX} alt="" /></a>
        <a className="socials-logo" href="linkedin.com"><img src={LogoLi} alt="" /></a>
      </div>
      <div className="socials-logo" style={{ gap: '8px' }}>
        <a className="footer-git" href="github.com/shreyasjainr">@shreyasjainr
        </a>
        <img src={LogoGit} alt="" />
      </div>
    </div>
  );
};

export default Footer;
