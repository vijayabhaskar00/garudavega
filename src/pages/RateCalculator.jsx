import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function RateCalculator() {
  const [weight, setWeight] = useState(5);
  const [dest, setDest] = useState('USA');

  const baseRates = {
    'USA': 650,
    'UK': 550,
    'UAE': 400,
    'AUS': 700
  };

  const cost = weight * (baseRates[dest] || 0);

  return (
    <div className="section" style={{minHeight: '80vh'}}>
      <div className="container">
        
        <div className="reveal" style={{marginBottom: '60px', textAlign: 'center'}}>
          <div className="chip d1" style={{marginBottom:16}}>Pricing Engine</div>
          <h1 className="display" style={{fontSize: '56px'}}>RATE <span className="text-grad">CALCULATOR</span></h1>
          <p className="text-2" style={{maxWidth:'600px', margin:'16px auto 0'}}>Get an instant quote for your shipment based on weight and destination country.</p>
        </div>

        <div className="card reveal d2" style={{maxWidth: '800px', margin: '0 auto'}}>
           <div className="card-inner" style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
             
             {/* Inputs */}
             <div style={{flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '24px'}}>
                <div>
                   <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>DESTINATION COUNTRY</label>
                   <select value={dest} onChange={e=>setDest(e.target.value)} style={{width: '100%', background: 'var(--navy)', border: '1px solid var(--line)', padding: '16px', borderRadius: '8px', color: '#fff'}}>
                      <option value="USA">United States (USA)</option>
                      <option value="UK">United Kingdom (UK)</option>
                      <option value="UAE">United Arab Emirates (UAE)</option>
                      <option value="AUS">Australia</option>
                   </select>
                </div>
                <div>
                   <label className="mono" style={{fontSize: '12px', color: 'var(--text-3)', display: 'block', marginBottom: '8px'}}>ACTUAL OR VOLUMETRIC WEIGHT (KG)</label>
                   <input type="range" min="1" max="100" value={weight} onChange={e=>setWeight(e.target.value)} style={{width: '100%', accentColor: 'var(--orange)'}} />
                   <div className="display" style={{fontSize: '32px', marginTop: '16px', color: 'var(--orange)'}}>{weight} KG</div>
                </div>
             </div>

             {/* Result */}
             <div style={{flex: '1 1 300px', background: 'var(--navy)', borderRadius: '16px', padding: '32px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid var(--line)'}}>
               <div className="mono" style={{color: 'var(--text-3)', marginBottom: '16px'}}>ESTIMATED COST (INR)</div>
               <div className="display" style={{fontSize: '64px', color: '#fff'}}>₹{cost.toLocaleString()}</div>
               <p className="text-2" style={{fontSize: '12px', marginTop: '16px'}}>*Rates are estimates and exclusive of fuel surcharge and taxes. Final rates apply at booking.</p>
               
               <Link to="/contact" className="btn btn-fill" style={{marginTop: '24px', justifyContent: 'center'}}>BOOK FREIGHT NOW</Link>
             </div>

           </div>
        </div>

      </div>
    </div>
  )
}
