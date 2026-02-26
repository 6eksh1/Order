import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="logo">
            Order<span>🟧</span>
          </h2>
          <p>© {new Date().getFullYear()} Order.uk. All rights reserved.</p>
        </div>

        <div>
          <h4>Legal Pages</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div>
          <h4>Important Links</h4>
          <ul>
            <li>Get Help</li>
            <li>Restaurants</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;