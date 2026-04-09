import { Link } from 'react-router-dom'
import './About.css'

const services = [
  {
    id: 'food',
    icon: '🍱',
    color: '#FF5500',
    title: 'Food & Sweets Delivery',
    tagline: 'A Taste of Home, Anywhere',
    desc: 'Garudavega specializes in shipping homemade sweets, snacks, pickles, savories, and groceries from India to the USA, UK, UAE, and Australia. We understand that these items represent love, which is why we handle them with extreme care and ensure they reach fresh.',
    features: [
      'Free specialized food packing',
      'FDA compliant documentation',
      'Fast customs clearance',
      'Spice & pickle safe containers',
      'Door-to-door delivery',
    ],
  },
  {
    id: 'document',
    icon: '📄',
    color: '#00E5FF',
    title: 'Document Express',
    tagline: 'Urgent Global Delivery',
    desc: 'For critical documents like university transcripts, legal papers, business contracts, or personal certificates. Our Document Express service ensures that your papers reach any destination in the world securely and on time.',
    features: [
      'Dispatched within 24 hours',
      'Special waterproof document sleeves',
      'Signature required on delivery',
      'High-priority routing',
      'Live GPS monitoring',
    ],
  },
  {
    id: 'student',
    icon: '🎓',
    color: '#FFB347',
    title: 'Student Services',
    tagline: 'Supporting Indian Students Abroad',
    desc: 'Moving abroad for studies? We make the transition easier. Send extra clothes, textbooks, university applications, or monthly homemade food rations at highly discounted student rates.',
    features: [
      'Up to 20% discount on standard rates',
      'Doorstep pickup from home',
      'Delivery direct to university dorms',
      'Assistance with customs forms',
      'Affordable excess baggage shipping',
    ],
  },
  {
    id: 'corporate',
    icon: '🏢',
    color: '#00FFC8',
    title: 'Corporate Cargo & Freight',
    tagline: 'B2B International Logistics',
    desc: 'We provide end-to-end supply chain and freight forwarding services for Indian exporters. Whether it is commercial samples, garments, pharmaceuticals, or heavy machinery, Garudavega delivers it seamlessly.',
    features: [
      'Air & Sea freight options',
      'Dedicated account managers',
      'Customs clearance in origin & destination',
      'Warehousing solutions',
      'B2B volume discounts',
    ],
  }
]

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-hero" style={{paddingBottom: '60px'}}>
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="chip" style={{marginBottom:24, borderColor: 'var(--cyan)'}}>Premium Courier Solutions</div>
          <h1 className="page-hero__title display" style={{fontSize: 'clamp(48px, 10vw, 72px)'}}>
            WHAT WE <span className="text-grad">DELIVER</span>
          </h1>
          <p className="page-hero__subtitle text-2">
            Garudavega provides specialized shipping solutions tailored to the unique needs of NRIs, students, and businesses communicating internationally.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{display: 'flex', flexDirection: 'column', gap: '80px'}}>
            {services.map((s, i) => (
              <div key={s.id} className={`card reveal`} style={{display:'flex', flexWrap:'wrap', flexDirection: i%2===0?'row':'row-reverse', overflow:'hidden', borderColor: `rgba(${s.color==='#FF5500'?'255,85,0':s.color==='#00E5FF'?'0,229,255':s.color==='#FFB347'?'255,179,71':'0,255,200'},0.3)`}}>
                {/* Visual Half */}
                <div style={{flex: '1 1 300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--navy)', minHeight: '300px', position: 'relative'}}>
                   <div style={{fontSize: '100px', position: 'relative', zIndex: 2}}>{s.icon}</div>
                   <div style={{position: 'absolute', width: '200px', height: '200px', background: s.color, filter: 'blur(80px)', opacity: 0.15}}></div>
                </div>
                {/* Content Half */}
                <div style={{flex: '1 1 300px', padding: 'clamp(24px, 5vw, 60px)'}}>
                  <div className="mono" style={{color: s.color, marginBottom: '8px', fontSize: '13px'}}>{s.tagline}</div>
                  <h2 className="display" style={{fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: '16px'}}>{s.title}</h2>
                  <p className="text-2" style={{lineHeight: '1.8', marginBottom: '24px'}}>{s.desc}</p>
                  
                  <ul style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color:'var(--text-2)'}}>
                        <div style={{width:'8px', height:'8px', borderRadius:'50%', background:s.color}}></div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <div style={{marginTop: '40px'}}>
                    <Link to="/contact" className="btn btn-stroke" style={{borderColor: s.color, color: s.color}}>BOOK THIS SERVICE</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
