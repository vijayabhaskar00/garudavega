import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services', sub: ['Express','Same Day','B2B','International','Hyperlocal','Reverse'] },
  { label: 'About', to: '/about' },
  { label: 'Track', to: '/tracking' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(null)
  const loc = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false); setSub(null) }, [loc])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="container nav__wrap">
        {/* Logo */}
        <Link to="/" className="nav__logo">
          <div className="nav__logo-mark">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
              <polygon points="19,2 36,11 36,27 19,36 2,27 2,11" fill="none" stroke="url(#lg1)" strokeWidth="1.5"/>
              <polygon points="19,8 30,14 30,24 19,30 8,24 8,14" fill="url(#lg1)" opacity="0.15"/>
              <polygon points="19,13 26,17 26,21 19,25 12,21 12,17" fill="url(#lg1)" opacity="0.5"/>
              <circle cx="19" cy="19" r="3.5" fill="url(#lg1)"/>
              <defs>
                <linearGradient id="lg1" x1="2" y1="2" x2="36" y2="36">
                  <stop stopColor="#FF5500"/><stop offset="1" stopColor="#FFB347"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="nav__logo-text">
            <span className="nav__logo-g">GARUDA</span>
            <span className="nav__logo-v">VEGA</span>
          </div>
        </Link>

        {/* Center links */}
        <nav className="nav__links hide-sm">
          {NAV.map(n => (
            <div key={n.label} className="nav__item"
              onMouseEnter={() => n.sub && setSub(n.label)}
              onMouseLeave={() => setSub(null)}>
              <NavLink to={n.to} className={({isActive}) => `nav__link ${isActive ? 'active' : ''}`} end={n.to==='/'}>
                {n.label}
                {n.sub && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>}
              </NavLink>
              {n.sub && sub === n.label && (
                <div className="nav__dropdown">
                  <div className="nav__dropdown-inner">
                    {n.sub.map(s => (
                      <Link key={s} to="/services" className="nav__dd-item">
                        <span className="nav__dd-dot"/>
                        {s} Delivery
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTAs */}
        <div className="nav__right hide-sm">
          <Link to="/tracking" className="btn btn-dark btn-sm-nav">Track</Link>
          <Link to="/contact" className="btn btn-fill btn-sm-nav">Get Quote ↗</Link>
        </div>

        {/* Hamburger */}
        <button className={`nav__burger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${open ? 'nav__mobile--open' : ''}`}>
        {NAV.map(n => (
          <NavLink key={n.label} to={n.to} className="nav__mobile-link" end={n.to==='/'}>
            {n.label}
          </NavLink>
        ))}
        <div className="nav__mobile-ctas">
          <Link to="/tracking" className="btn btn-stroke" style={{flex:1,justifyContent:'center'}}>Track Shipment</Link>
          <Link to="/contact" className="btn btn-fill" style={{flex:1,justifyContent:'center'}}>Get Quote</Link>
        </div>
      </div>
    </header>
  )
}
