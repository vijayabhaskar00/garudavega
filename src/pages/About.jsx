import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <section className="page-hero">
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="chip" style={{marginBottom:24, borderColor: 'var(--orange)', color: 'var(--orange)', background: 'transparent'}}>About Garudavega</div>
          <h1 className="page-hero__title display" style={{fontSize: '80px', letterSpacing:'1px', marginBottom:16}}>
            DELIVERING <span className="text-grad">HAPPINESS</span> ACROSS BORDERS
          </h1>
          <p className="page-hero__subtitle text-2" style={{fontSize:'16px'}}>
            We are India's premier international courier service. At Garudavega, we understand the emotional value behind every parcel—whether it's homemade sweets from a mother in India or crucial documents for a university application.
          </p>
        </div>
      </section>

      {/* MISSION / VISION BENTO */}
      <section className="section">
        <div className="container">
          <div className="bento-grid" style={{gridTemplateColumns: '1fr 1fr', gridAutoRows: 'auto'}}>
            <div className="b-card card reveal">
              <div className="card-inner">
                <div className="b-icon" style={{fontSize: '48px'}}>🚀</div>
                <h2 className="display" style={{fontSize: '40px'}}>OUR MISSION</h2>
                <p className="text-2" style={{lineHeight: '1.8'}}>To bridge the geographical gap between NRIs and their families in India by providing highly reliable, incredibly fast, and very affordable international courier services. We ensure your love reaches across the globe smoothly.</p>
              </div>
            </div>
            <div className="b-card card reveal d2" style={{borderColor:'var(--line-2)'}}>
              <div className="card-inner">
                <div className="b-icon" style={{fontSize: '48px', color: 'var(--cyan)'}}>🌟</div>
                <h2 className="display" style={{fontSize: '40px'}}>OUR VISION</h2>
                <p className="text-2" style={{lineHeight: '1.8'}}>To be the first choice for international shipping in India, recognized for our flawless delivery network in the USA, UK, UAE, and beyond, with a strong commitment to customer satisfaction and innovative tracking technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US TILE SECTION */}
      <section className="section" style={{background:'var(--navy-2)', borderTop:'1px solid var(--line)'}}>
        <div className="container">
          <div className="center reveal" style={{marginBottom: '60px'}}>
            <h2 className="display" style={{fontSize: '56px'}}>WHY CHOOSE <span className="text-grad">GARUDAVEGA?</span></h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'24px'}}>
            {[
              { icon: '💰', title: 'Cost Effective', desc: 'Our rates are exceptionally competitive, routinely 40% to 50% cheaper than major global courier brands.' },
              { icon: '📦', title: 'Free Packing Service', desc: 'Sending homemade food? We offer free specialized packing that meets international FDA customs standards.' },
              { icon: '🔍', title: 'Advanced Tracking', desc: 'State-of-the-art online tracking lets you monitor your parcel\'s journey from the drop-off to the doorstep.' },
              { icon: '🤝', title: 'Global Network', desc: 'Partnerships with premium global delivery networks ensure last-mile delivery excellence.' },
              { icon: '🏢', title: 'Wide Reach', desc: 'Over 150+ branches across India ensure that you can drop off your parcel conveniently near you.' },
              { icon: '📞', title: 'Dedicated Support', desc: 'Round-the-clock customer support to assist you with customs clearance, booking, and delivery queries.' },
            ].map((v, i) => (
              <div key={i} className="card reveal" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="card-inner">
                  <div style={{fontSize: '32px', marginBottom: '16px'}}>{v.icon}</div>
                  <h3 className="mono" style={{color:'var(--text)', marginBottom:'8px', fontWeight: 'bold'}}>{v.title}</h3>
                  <p className="text-2" style={{fontSize:'14px', lineHeight:'1.6'}}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <h2 className="display" style={{fontSize:'48px'}}>READY TO SHIP INTERNATIONALLY?</h2>
          <p className="text-2" style={{maxWidth: '600px', margin: '16px auto 32px'}}>Experience the fastest delivery to the USA, UK, and the rest of the world. Trust Garudavega with your shipments.</p>
          <Link to="/contact" className="btn btn-fill" style={{fontSize: '18px', padding:'16px 40px'}}>FIND A BRANCH</Link>
        </div>
      </section>
    </div>
  )
}
