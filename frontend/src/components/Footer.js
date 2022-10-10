import React from "react";
import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import gpLogoDark from "../assets/images/optimed.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items isLogo">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                <img
                  src={gpLogoDark}
                  className="footer-gp-logo"
                  alt="logo-ghostprod"
                  style={{ width: "110px", height: "70px" }}
                />
              </Link>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="footer-link-items">
            <h2>Contact Info</h2>
            <hr className="solid" />
            <div className="material-icons">
              <i className="fas fa-map-marker-alt"></i>
              <span> Immeuble Malek, Bloc B, étage 4, Appt 3</span>
              <span> Boulevard de la terre, Centre Urbain Nord</span>
            </div>
            <div className="material-icons">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+21622926686"> 00 216 22 92 66 86</a>
            </div>
            <div className="material-icons">
              <i className="fas fa-envelope"></i>
              <a href="mailto:contact@ghostprod.net"> contact@ghostprod.net</a>
            </div>
          </div>
          <div className="footer-link-items">
            <h2>More on the Blog</h2>
            <hr className="solid" />
            <Link to="/contact">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Contact us
              </span1>
            </Link>
            <Link to="/">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Contributors
                And Writers
              </span1>
            </Link>
            <Link to="/">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Write for us
              </span1>
            </Link>
            <Link to="/about-us">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;A propos de
                GhostProd
              </span1>
            </Link>
            <Link to="/privacy">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Privacy
                Policy
              </span1>
            </Link>
          </div>
          <div className="footer-link-items">
            <h2>More on GhostProd</h2>
            <hr className="solid" />
            <Link to="/team">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;The Team
              </span1>
            </Link>
            <Link to="/jobs">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Jobs
              </span1>
            </Link>
            <Link to="/press">
              <span1>
                <i className="fas fa-chevron-right"></i>&nbsp;&nbsp;Press
              </span1>
            </Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">
            © Made by{" "}
            <a href="https://inceptum.tn/" target="_blank" rel="noreferrer">
              INCEPTUM Junior Entreprise
            </a>
          </small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/Ghostprod.net"
              target="_blank"
              aria-label="Facebook"
              rel="noreferrer"
            >
              <i class="fab fa-facebook-square" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/ghostprod_officiel/?hl=fr"
              target="_blank"
              aria-label="Youtube"
              rel="noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.instagram.com/ghostprod_officiel/?hl=fr"
              target="_blank"
              aria-label="Instagram"
              rel="noreferrer"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.instagram.com/ghostprod_officiel/?hl=fr"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
