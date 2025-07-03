import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Erfan</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/eirfaan_/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://t.me/+989309843395"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>

          <a
            href="https://github.com/Eirfan-dev"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer;