import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <img src="/Assests/Cloudfire.png" className="logo" alt="Cloudfire" style={{ width: '180px' }} />
            <div className="address-card" style={{ background: '#ff7a00', color: 'white', borderRadius: '15px' }}>
              <div className="bullet-icon" style={{ background: 'transparent' }}>
                <img src="/Assests/address.png" width="24" alt="address" />
              </div>
              <span style={{ fontSize: '13px' }}>Plot No.33, (225), Sohna,<br />Gurugram, Haryana 122103</span>
            </div>
            <div className="social-links" style={{ marginTop: '20px' }}>
              <img src="/Assests/fb.png" width="20" height="20" alt="FB" className="social-link" />
              <img src="/Assests/insta.png" width="20" height="20" alt="IG" className="social-link" />
              <img src="/Assests/youtube.png" width="20" height="20" alt="YT" className="social-link" />
              <img src="/Assests/linkedin.png" width="20" height="20" alt="IN" className="social-link" />
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>E-Commerce</h4>
              <ul>
                <li>Big-Commerce</li><li>Magento</li><li>OScommerce</li><li>Prestashop</li><li>Shopify</li><li>Ubercart</li><li>Wpcommerce</li><li>Opencart</li><li>Woocommerce</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li style={{ color: '#ff7a00' }}>Home</li><li>Our Tools</li><li>Services</li><li>Skills Network</li><li>Industries</li><li>AI Talent</li><li>Case Studies</li><li>Resources</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>E-Learning</li><li>E-Commerce</li><li>Framework</li><li>CMS</li><li>Virtual Classroom</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>E-Learning</h4>
              <ul>
                <li>Moodle</li><li>Joomoodle</li><li>WPLMS</li><li>Mahara</li><li>Learndash</li><li>Learnpress</li><li>Totara</li><li>Opigno</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 CloudFire IT Services. All rights reserved.</p>
          <div className="bottom-links">
            <span>Contact Us</span>
            <span>Request a Demo</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
