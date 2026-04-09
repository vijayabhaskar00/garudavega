import { useState } from 'react'
import './Tracking.css'

const mockShipments = {
  'GV2024081547': {
    status: 'in-transit',
    from: 'Mumbai, Maharashtra',
    to: 'Delhi, NCR',
    eta: 'Today, 6:00 PM',
    weight: '1.2 kg',
    service: 'Express Delivery',
    events: [
      { time: 'Apr 8, 9:00 AM', location: 'Delhi Hub', desc: 'Out for delivery', status: 'active' },
      { time: 'Apr 8, 4:00 AM', location: 'Delhi Distribution Center', desc: 'Shipment arrived at delivery hub', status: 'done' },
      { time: 'Apr 7, 10:00 PM', location: 'Nagpur Transit Hub', desc: 'In transit to destination city', status: 'done' },
      { time: 'Apr 7, 6:00 PM', location: 'Mumbai Hub', desc: 'Shipment dispatched from origin', status: 'done' },
      { time: 'Apr 7, 2:00 PM', location: 'Mumbai, Andheri', desc: 'Pickup successful', status: 'done' },
      { time: 'Apr 7, 1:00 PM', location: 'Online', desc: 'Booking confirmed, AWB generated', status: 'done' },
    ]
  }
}

const statusLabels = {
  'in-transit': { label: 'In Transit', color: 'var(--orange)', icon: '🚚' },
  'delivered': { label: 'Delivered', color: 'var(--cyan)', icon: '✅' },
  'out-for-delivery': { label: 'Out for Delivery', color: 'var(--amber)', icon: '🛵' },
}

export default function Tracking() {
  const [awb, setAwb] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleTrack = (e) => {
    e.preventDefault()
    setError('')
    if (!awb.trim()) { setError('Please enter a tracking number'); return }
    setLoading(true)
    setTimeout(() => {
      const found = mockShipments[awb.trim().toUpperCase()]
      if (found) { setResult({ awb: awb.trim().toUpperCase(), ...found }) }
      else { setError('Tracking number not found. Try: GV2024081547') }
      setLoading(false)
    }, 1400)
  }

  const statusInfo = result ? (statusLabels[result.status] || statusLabels['in-transit']) : null

  return (
    <div className="tracking-page">
      {/* HERO */}
      <section className="section" style={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden'}}>
        <div style={{position:'absolute', width:'500px', height:'500px', top:'-150px', left:'-100px', background:'var(--cyan)', filter:'blur(150px)', opacity:0.1, borderRadius:'50%'}}></div>
        <div className="container" style={{position:'relative', zIndex:1}}>
          <div className="center reveal">
            <div className="chip d1" style={{marginBottom:16, display:'inline-block'}}>Live Tracking</div>
            <h1 className="display d2" style={{fontSize: 'clamp(48px, 8vw, 80px)'}}>
              TRACK YOUR <span className="text-grad">SHIPMENT</span>
            </h1>
            <p className="text-2 d3" style={{maxWidth: 600, margin: '24px auto'}}>
              Real-time, GPS-powered tracking for every GarudaVega shipment. Know exactly where your package is.
            </p>
          </div>

          {/* TRACK FORM */}
          <form onSubmit={handleTrack} className="track-form reveal d4">
            <div className="track-form__input-wrap">
              <div className="track-input-icon" style={{color: 'var(--orange)', fontSize: '24px', flexShrink: 0, paddingLeft: '8px'}}>📌</div>
              <input
                value={awb}
                onChange={e => setAwb(e.target.value)}
                placeholder="Enter AWB No (e.g. GV2024081547)"
                className="track-main-input mono"
              />
              <button type="submit" className="btn btn-fill" disabled={loading} style={{flexShrink: 0}}>
                {loading ? 'TRACKING...' : 'TRACK NOW'}
              </button>
            </div>
            {error && <div className="mono" style={{color: '#ff4444', textAlign: 'center', marginTop: '16px', fontSize: '13px'}}>{error}</div>}
          </form>
        </div>
      </section>

      {/* RESULT */}
      {result && (
        <section className="section s-pad reveal">
          <div className="container">
            <div className="track-result">
              {/* Summary */}
              <div className="card">
                <div className="card-inner">
                  <div className="track-summary__top">
                    <div>
                      <div className="mono" style={{fontSize: '12px', color: 'var(--text-3)', marginBottom: '8px'}}>AWB NUMBER</div>
                      <div className="display" style={{fontSize: '32px', color: '#fff'}}>{result.awb}</div>
                      <div className="text-3">{result.service}</div>
                    </div>
                    <div className="track-status-badge mono" style={{color: statusInfo.color, borderColor: statusInfo.color, background: 'rgba(255,255,255,0.02)'}}>
                      {statusInfo.icon} {statusInfo.label}
                    </div>
                  </div>
                  
                  <div style={{height: '1px', background: 'var(--line)', margin: '32px 0'}}></div>
                  
                  <div className="track-meta">
                    <div className="track-meta-item">
                      <div className="mono" style={{fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px'}}>FROM</div>
                      <div className="text-2" style={{color: '#fff'}}>{result.from}</div>
                    </div>
                    <div className="track-meta-arrow display" style={{color: 'var(--cyan)'}}>→</div>
                    <div className="track-meta-item">
                      <div className="mono" style={{fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px'}}>TO</div>
                      <div className="text-2" style={{color: '#fff'}}>{result.to}</div>
                    </div>
                    <div className="track-meta-item">
                      <div className="mono" style={{fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px'}}>ETA</div>
                      <div className="text-2" style={{color: 'var(--orange)'}}>{result.eta}</div>
                    </div>
                    <div className="track-meta-item">
                      <div className="mono" style={{fontSize: '11px', color: 'var(--text-3)', marginBottom: '4px'}}>WEIGHT</div>
                      <div className="text-2" style={{color: '#fff'}}>{result.weight}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="card">
                <div className="card-inner">
                  <h3 className="display" style={{fontSize: '24px', marginBottom: '32px'}}>SHIPMENT <span className="text-grad">JOURNEY</span></h3>
                  <div className="event-list">
                    {result.events.map((ev, i) => (
                      <div key={i} className={`event-item ${ev.status}`}>
                        <div className="event-dot"/>
                        {i < result.events.length - 1 && <div className="event-line"/>}
                        <div className="event-content">
                          <div className="mono" style={{fontSize: '15px', color: ev.status === 'active' ? 'var(--orange)' : '#fff', marginBottom: '8px'}}>{ev.desc}</div>
                          <div className="text-3" style={{fontSize: '13px', marginBottom: '4px'}}>📍 {ev.location}</div>
                          <div className="mono" style={{fontSize: '11px', color: 'var(--text-3)'}}>{ev.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="section" style={{background: 'var(--navy-2)', borderTop: '1px solid var(--line)'}}>
        <div className="container">
          <div className="center reveal" style={{marginBottom: '60px'}}>
            <h2 className="display" style={{fontSize: 'clamp(40px, 6vw, 64px)'}}>WHY TRACK WITH <span className="text-grad">GARUDA?</span></h2>
          </div>
          <div className="g-right reveal d2" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px'}}>
            {[
              { icon:'📡', title:'Real-Time Updates', desc:'Live location updates every 5 minutes.' },
              { icon:'📱', title:'Multi-Channel Alerts', desc:'SMS and WhatsApp notifications at each stage.' },
              { icon:'🗺️', title:'Interactive Map', desc:'See your package on a live digital map.' },
              { icon:'📊', title:'Secure Transit', desc:'Full delivery history logs encrypted.' },
            ].map((f, i) => (
              <div key={i} className="card" style={{textAlign:'center'}}>
                <div className="card-inner" style={{padding: '40px 24px'}}>
                  <div style={{fontSize: '48px', marginBottom: '24px', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'}}>{f.icon}</div>
                  <h3 className="display" style={{fontSize: '24px', marginBottom: '12px'}}>{f.title}</h3>
                  <p className="text-2" style={{fontSize: '14px', lineHeight: 1.6}}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
