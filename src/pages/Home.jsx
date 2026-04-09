import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
  const [awb, setAwb] = useState('')
  const navigate = useNavigate()
  
  // Real-time tracking simulation
  const [trackStep, setTrackStep] = useState(0)
  const trackingStatuses = [
    { dest: 'Delivery USA', status: 'CUSTOMS CLEARED', desc: 'Status: OUT FOR DELIVERY', color: 'var(--cyan)' },
    { dest: 'Delivery UK', status: 'IN TRANSIT', desc: 'Location: London Hub', color: 'var(--amber)' },
    { dest: 'Delivery UAE', status: 'ARRIVED', desc: 'Status: READY FOR PICKUP', color: '#00E5CC' },
    { dest: 'Delivery AUS', status: 'DISPATCHED', desc: 'Flight: QF 104 DEPARTED', color: 'var(--orange)' }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setTrackStep(prev => (prev + 1) % trackingStatuses.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const handleTrack = (e) => {
    e.preventDefault()
    if (awb.trim()) navigate('/tracking')
  }

  return (
    <div className="home2">
      {/* ── HERO ── */}
      <section className="h2-hero">
        <div className="container">
          <div className="h2-hero-grid">
            <div className="h2-hero-main reveal">
              <div className="chip d1">✈️ Best International Courier Services</div>
              <h1 className="display h2-title d2">
                CONNECTING INDIA<br />
                <span className="text-grad">WITH THE WORLD</span>
              </h1>
              <p className="h2-subtitle d3">
                Missing the taste of home? Send homemade sweets, snacks, pickles, and essential 
                documents from anywhere in India to the USA, UK, UAE & Australia with Garudavega's fast, reliable, and affordable courier services.
              </p>

              {/* TRACKING BAR IN HERO */}
              <form onSubmit={handleTrack} className="h2-track-bar d4">
                <input 
                  type="text" 
                  placeholder="Enter Tracking No..." 
                  value={awb} onChange={(e)=>setAwb(e.target.value)} 
                />
                <button type="submit" className="btn btn-fill">TRACK SHIPMENT</button>
              </form>

              <div className="h2-hero-stats d5">
                <div><span className="mono text-grad">150+</span><br/><span className="text-3">Branches globally</span></div>
                <div><span className="mono text-grad">10K+</span><br/><span className="text-3">Daily Shipments</span></div>
                <div><span className="mono text-grad">200+</span><br/><span className="text-3">Countries Served</span></div>
              </div>
            </div>

            {/* BENTO HERO VISUALS */}
            <div className="h2-hero-bento reveal-l d3">
              <div className="bento-box bento-1 card">
                <div className="card-inner">
                  <div className="b-icon">📍</div>
                  <h3 className="mono">Live Global Tracking</h3>
                  <div className="radar">
                    <div className="radar-sweep"></div>
                    <div className="radar-dot dot-1"></div>
                    <div className="radar-dot dot-2" style={{background:'var(--orange)', boxShadow:'0 0 10px var(--orange)'}}></div>
                    <div className="radar-dot dot-3"></div>
                  </div>
                </div>
              </div>
              <div className="bento-box bento-2 card">
                <div className="card-inner" style={{minHeight: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                  <div key={trackStep} style={{animation: 'fadeUp 0.6s cubic-bezier(.4,0,.2,1) forwards'}}>
                    <div className="chip mono" style={{marginBottom:16, borderColor: trackingStatuses[trackStep].color, color: trackingStatuses[trackStep].color}}>
                      {trackingStatuses[trackStep].dest}
                    </div>
                    <h3 className="display" style={{fontSize:32, color: trackingStatuses[trackStep].color, transition:'color 0.4s'}}>
                      {trackingStatuses[trackStep].status}
                    </h3>
                    <p className="text-2 mono" style={{fontSize:12, marginTop:4}}>
                      {trackingStatuses[trackStep].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENTO SERVICES ── */}
      <section className="section bg-mesh">
        <div className="container">
          <div className="s-head center reveal" style={{marginBottom: 40}}>
            <h2 className="display" style={{fontSize: 'clamp(40px, 6vw, 64px)'}}>OUR PREMIUM <span className="text-grad">SERVICES</span></h2>
          </div>
          
          <div className="bento-grid">
            {/* Box 1 (Big) */}
            <div className="b-card b-card-tall card reveal d1">
              <div className="card-inner">
                <div className="b-icon">🍱</div>
                <h3 className="display" style={{fontSize:40,marginBottom:12}}>FOOD & SNACKS DELIVERIES</h3>
                <p className="text-2">We specialize in delivering homemade sweets, snacks, pickles, and groceries from India to your loved ones abroad. Packed with care, delivered fresh.</p>
                <div className="b-ill" style={{background:'rgba(255,85,0,0.05)', borderRadius: '12px', marginTop: '20px', padding: '16px', border:'1px dashed var(--orange)'}}>
                  <span className="mono text-grad" style={{fontSize:12}}>SPECIAL FDA COMPLIANT PACKING</span>
                </div>
              </div>
            </div>
            
            {/* Box 2 (Wide) */}
            <div className="b-card b-card-wide card reveal d2" style={{borderColor:'rgba(0,229,255,0.2)'}}>
              <div className="card-inner">
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                  <div>
                    <div className="chip chip-cyan" style={{marginBottom:16}}>Express</div>
                    <h3 className="display" style={{fontSize:32,marginBottom:8}}>DOCUMENTS & PARCELS</h3>
                    <p className="text-2">University applications, legal documents, and urgent parcels delivered securely and on-time internationally.</p>
                  </div>
                  <div className="b-icon" style={{color:'var(--cyan)'}}>📄</div>
                </div>
              </div>
            </div>

            {/* Box 3 (Small) */}
            <div className="b-card card reveal d3">
              <div className="card-inner">
                <div className="b-icon">🎓</div>
                <h3 className="display" style={{fontSize:24,marginBottom:8}}>STUDENT EXPRESS</h3>
                <p className="text-2" style={{fontSize:13}}>Special discounted rates for students studying abroad. Send books, clothes, and essentials.</p>
              </div>
            </div>

            {/* Box 4 (Small) */}
            <div className="b-card card reveal d4">
              <div className="card-inner">
                <div className="b-icon" style={{color:'var(--amber)'}}>🧳</div>
                <h3 className="display" style={{fontSize:24,marginBottom:8}}>EXCESS BAGGAGE</h3>
                <p className="text-2" style={{fontSize:13}}>Travel light. Let us handle your unaccompanied baggage at affordable air freight rates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ASYMMETRIC STATS / 'GARUDA' ── */}
      <section className="section" style={{background:'var(--navy-2)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
        <div className="container">
          <div className="garuda-split">
            <div className="g-left reveal">
              <h2 className="display g-huge text-grad">GARUDA</h2>
              <h3 className="display" style={{fontSize: 'clamp(32px, 5vw, 48px)'}}>TRUSTED BY OVER SEAS INDIANS</h3>
              <p className="text-2" style={{maxWidth: '100%', marginTop: 24}}>
                With our extensive network and partnerships with global carriers like DHL, FedEx, and UPS, 
                Garudavega guarantees the fastest transit times and hassle-free customs clearance for your international shipments.
              </p>
              <Link to="/about" className="btn btn-stroke" style={{marginTop:32}}>LEARN MORE ABOUT US</Link>
            </div>
            
            <div className="g-right reveal d2">
              <div className="g-stat-box card">
                <div className="card-inner">
                  <div className="mono text-grad" style={{fontSize:14}}>01. NETWORK</div>
                  <div className="display" style={{fontSize: 'clamp(48px, 6vw, 64px)', lineHeight:1, marginTop:8}}>USA & UK</div>
                  <div className="text-3">Major Delivery Destinations</div>
                </div>
              </div>
              <div className="g-stat-box card">
                <div className="card-inner">
                  <div className="mono text-grad-cyan" style={{fontSize:14}}>02. PRICE</div>
                  <div className="display" style={{fontSize: 'clamp(48px, 6vw, 64px)', lineHeight:1, marginTop:8}}>40% LESS</div>
                  <div className="text-3">Than standard international carriers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAST ACTION TOOLS (3D TILE SECTION) ── */}
      <section className="section bg-grid">
        <div className="container">
          <div className="center reveal" style={{marginBottom: '60px', position: 'relative', zIndex: 2}}>
            <div className="chip d1" style={{marginBottom:16}}>Customer Portal</div>
            <h2 className="display" style={{fontSize:'clamp(40px, 6vw, 64px)'}}>QUICK <span className="text-grad">ACTIONS</span></h2>
          </div>

          <div style={{display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center'}}>
            {/* 3D Visual Left */}
            <div className="reveal-l" style={{flex: '1 1 400px', display: 'flex', justifyContent: 'center', position: 'relative'}}>
              <div style={{position: 'absolute', width: '300px', height: '300px', background: 'var(--cyan)', filter: 'blur(120px)', opacity: 0.15, borderRadius: '50%'}}></div>
              
              <div style={{
                position: 'relative', 
                zIndex: 2, 
                borderRadius: '32px', 
                overflow: 'hidden',
                animation: 'float 6s ease-in-out infinite',
                border: '1px solid rgba(0, 229, 255, 0.2)',
                boxShadow: '0 30px 60px rgba(0,229,255,0.1), inset 0 0 20px rgba(0,229,255,0.05)',
                background: 'rgba(9, 18, 38, 0.8)',
                padding: '12px'
              }}>
                <img 
                  src="/3d-parcel.png" 
                  alt="3D Floating Parcel Box" 
                  style={{
                    maxWidth: '100%', 
                    borderRadius: '20px',
                    display: 'block',
                    objectFit: 'cover'
                  }} 
                />
              </div>
            </div>

            {/* Quick Actions Grid Right */}
            <div className="reveal d2" style={{flex: '2 1 600px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px'}}>
              {[
                { icon: '📦', title: 'Order Your Shipment', tag: 'Fast Book', to: '/order' },
                { icon: '🚐', title: 'Pick Up / Drop Off', tag: 'Logistics', to: '/pickup' },
                { icon: '💱', title: 'Currency Converter', tag: 'Live Rates', to: '/currency' },
                { icon: '📏', title: 'Volume Calculation', tag: 'Estimator', to: '/volume' },
                { icon: '💰', title: 'Rate Calculator', tag: 'Pricing', to: '/rate' },
                { icon: '🚫', title: 'Prohibited List', tag: 'Customs', to: '/prohibited' }
              ].map((act, i) => (
                <Link to={act.to} key={i} className="card" style={{cursor: 'pointer', transition: 'all 0.3s', borderColor: 'var(--line)', display: 'block'}} onMouseEnter={e => e.currentTarget.style.borderColor='var(--orange)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--line)'}>
                  <div className="card-inner" style={{padding: '24px'}}>
                    <div className="mono" style={{color: 'var(--cyan)', fontSize: '11px', marginBottom: '12px'}}>{act.tag}</div>
                    <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                      <div style={{fontSize: '32px'}}>{act.icon}</div>
                      <h4 className="display" style={{fontSize: '24px', margin: 0}}>{act.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR BRANCHES ── */}
      <section className="section" style={{background: 'var(--navy-2)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)'}}>
        <div className="container">
          <div className="center reveal">
            <h2 className="display" style={{fontSize:'clamp(40px, 6vw, 64px)'}}><span className="text-grad">OUR BRANCHES</span></h2>
            <h3 className="display" style={{fontSize: 'clamp(24px, 4vw, 32px)', marginTop: '16px'}}>Over 441+ Branches In 187+ Cities & Counting</h3>
            <p className="text-2" style={{maxWidth: '600px', margin: '16px auto 32px'}}>
              Fast, secure international and domestic delivery services for parcels and documents.
            </p>
            <Link to="/contact" className="btn btn-stroke">VIEW ALL BRANCHES</Link>
          </div>
        </div>
      </section>

      {/* ── CTA MARQUEE ── */}
      <section className="s-pad overflow-hidden">
        <div className="marquee-big">
          <div className="m-track display">
            <span>SEND HOMEMADE SWEETS</span><span className="dot"></span>
            <span>USA EXPRESS DELIVERY</span><span className="dot"></span>
            <span>NRI ESSENTIALS</span><span className="dot"></span>
            <span>SEND HOMEMADE SWEETS</span><span className="dot"></span>
          </div>
        </div>
        <div className="center" style={{marginTop:40}}>
          <Link to="/contact" className="btn btn-fill" style={{transform:'scale(1.2)'}}>FIND NEAREST BRANCH</Link>
        </div>
      </section>
    </div>
  )
}
