
import "../styles/footer.css";
import { logo, twitter, facebook } from "../assets/images";
const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-links">
        <a href="/" className="footer-link">
          Home
        </a>
        <a href="/about" className="footer-link">
          About Us
        </a>
        <a href="/contact" className="footer-link">
          Contact
        </a>
        <a href="/terms" className="footer-link">
          Terms of Service
        </a>
        <a href="/policy" className="footer-link">
          Privacy Policy
        </a>
      </div>
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footer-social">
        <a href="#facebook" className="social-icon">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#twitter" className="social-icon">
          <img src={twitter} alt="X" />
        </a>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 RWA Project. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
