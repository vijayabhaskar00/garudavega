import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        {/* Upper */}
        <div className="footer__upper">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <path d="M18 2L34 10V18L18 34L2 18V10L18 2Z" fill="url(#fLogoGrad)" opacity="0.15"/>
                <path d="M18 2L34 10V18L18 34L2 18V10L18 2Z" stroke="url(#fLogoGrad)" strokeWidth="1.5"/>
                <path d="M8 14L18 8L28 14V22L18 28L8 22V14Z" fill="url(#fLogoGrad)" opacity="0.6"/>
                <path d="M12 18L18 12L24 18L18 24L12 18Z" fill="url(#fLogoGrad)"/>
                <defs>
                  <linearGradient id="fLogoGrad" x1="2" y1="2" x2="34" y2="34">
                    <stop stopColor="#FF6B00"/><stop offset="1" stopColor="#FF9A3C"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer__logo-text">
                <span>GARUDA</span><span style={{color:'#FF6B00'}}>VEGA</span>
              </span>
            </Link>
            <p className="footer__tagline">
              Delivering at the speed of a Garuda. Pan-India express logistics powering India's fastest-growing businesses.
            </p>
            <div className="footer__trust">
              <div className="trust-item">🏆 Best Logistics 2023</div>
              <div className="trust-item">⭐ 4.8/5 Rating</div>
              <div className="trust-item">🔐 ISO Certified</div>
            </div>
            <div className="footer__socials">
              {['LinkedIn','Twitter','Instagram','Facebook','YouTube'].map(s => (
                <a key={s} href="#" className="social-icon" title={s}>
                  {s.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer__links-grid">
            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              {['Express Delivery','Same Day Delivery','International Shipping','B2B Logistics','Hyperlocal Delivery','Reverse Logistics','Cold Chain Shipping'].map(s => (
                <Link key={s} to="/services" className="footer__link">{s}</Link>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              {[['About Us','/about'],['Our Team','/about'],['Careers','/contact'],['Press & Media','/contact'],['Partner with Us','/contact'],['Blog','/'],['Sustainability','/']] .map(([label, path]) => (
                <Link key={label} to={path} className="footer__link">{label}</Link>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Resources</h4>
              {[['Track Shipment','/tracking'],['Rate Calculator','/contact'],['API Documentation','/contact'],['Shipping Guide','/contact'],['Help Center','/contact'],['FAQs','/contact']].map(([label, path]) => (
                <Link key={label} to={path} className="footer__link">{label}</Link>
              ))}
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Contact</h4>
              <div className="footer__contact-items">
                <div className="footer__contact-item">
                  <span>📞</span>
                  <div>
                    <div style={{fontWeight:600,fontSize:14}}>1800-123-4567</div>
                    <div style={{color:'var(--text-muted)',fontSize:12}}>Toll Free · Mon-Sat</div>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <span>✉️</span>
                  <div>
                    <div style={{fontWeight:600,fontSize:14}}>hello@garudavega.com</div>
                    <div style={{color:'var(--text-muted)',fontSize:12}}>Response within 2 hrs</div>
                  </div>
                </div>
                <div className="footer__contact-item">
                  <span>📍</span>
                  <div>
                    <div style={{fontWeight:600,fontSize:14}}>Mumbai, India</div>
                    <div style={{color:'var(--text-muted)',fontSize:12}}>One Indiabulls Centre</div>
                  </div>
                </div>
              </div>
              {/* Newsletter */}
              <div className="footer__newsletter">
                <p style={{fontSize:13,color:'var(--text-secondary)',marginBottom:12}}>Get logistics insights & shipping tips:</p>
                <div className="newsletter-input-wrap">
                  <input placeholder="your@email.com" className="newsletter-input" />
                  <button className="btn btn-primary btn-sm">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom */}
        <div className="footer__bottom">
          <div className="footer__copy">
            © 2025 GarudaVega Logistics Pvt. Ltd. All rights reserved.
          </div>
          <div className="footer__legal">
            {['Privacy Policy','Terms of Service','Cookie Policy','Shipping Policy'].map((l, i) => (
              <span key={l}>
                <a href="#" className="footer__legal-link">{l}</a>
                {i < 3 && <span className="footer__legal-dot">·</span>}
              </span>
            ))}
          </div>
          <div style={{fontSize:13,color:'var(--text-muted)'}}>
            Made with ❤️ in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  )
}
