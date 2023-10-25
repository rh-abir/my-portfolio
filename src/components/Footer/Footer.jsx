import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Rakibul Hasan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            {/* <a href="#testimonals" className="footer__link">
              Testimonals
            </a> */}
          </li>
        </ul>

        <div className="footer__social">
          <a
            href=" https://www.facebook.com/rhabir.co/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href=" https://www.instagram.com/rhabir71/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href=" https://twitter.com/Rhabir9"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Rakibul Hasan. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
