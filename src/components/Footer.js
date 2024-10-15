import { VscTerminalDebian  } from "react-icons/vsc";
import { FaInstagramSquare, FaYoutube, FaFacebookSquare, FaTwitter   } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="footer-logo">
        <VscTerminalDebian className="logo" />
        <h4>EventSnap</h4>
        </div>
        <div className="foorter-icons">
          <FaInstagramSquare className="footer-icon" />
          <FaYoutube className="footer-icon"/>
          <FaFacebookSquare className="footer-icon"/>
          <FaTwitter className="footer-icon"/>
        </div>

      </div>
      <div className="right">
        <div className="helpful-links">
          <h5>Helpful Links</h5>
          <ul>
            <li>Help/FAQ</li>
            <li>My Account</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="about-us">
          <h5>About Us</h5>
          <ul>
            <li>Who We Are</li>
            <li>Privacy Policy</li>
            <li>Ad Choices</li>
          </ul>
        </div>
      </div>
      {/* <hr style={{ border: '1px solid #000000' }} /> */}
    </div>

  )
}
export default Footer