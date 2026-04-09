import { useState } from 'react'

export default function CurrencyConverter() {
  const [inr, setInr] = useState(1000);
  const [target, setTarget] = useState('USD');
  
  const rates = {
    'USD': 0.012,
    'GBP': 0.0094,
    'AED': 0.044,
    'AUD': 0.018
  }

  return (
    <div className="section" style={{minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div className="container" style={{maxWidth: '600px', width: '100%', textAlign: 'center'}}>
        
        <div className="reveal" style={{marginBottom: '40px'}}>
          <div className="chip d1" style={{marginBottom:16}}>Finance</div>
          <h1 className="display" style={{fontSize: '56px'}}>CURRENCY <span className="text-grad">CONVERTER</span></h1>
          <p className="text-2" style={{marginTop: '16px'}}>Calculate exact shipping fees equivalent based on daily live market conversion rates.</p>
        </div>

        <div className="card reveal d2">
          <div className="card-inner">
            
             <div style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                <div>
                   <label className="mono" style={{color: 'var(--text-3)', fontSize: '12px', display: 'block', marginBottom: '12px'}}>INDIAN RUPEES (INR)</label>
                   <input type="number" value={inr} onChange={e=>setInr(e.target.value)} style={{fontSize: '32px', fontWeight: 'bold', width: '100%', background: 'transparent', borderBottom: '2px solid var(--line)', color: '#fff', paddingBottom: '8px', textAlign: 'center'}} />
                </div>
                
                <div style={{fontSize: '32px', color: 'var(--orange)'}}>↓</div>

                <div>
                   <div style={{display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '24px'}}>
                      {Object.keys(rates).map(cur => (
                        <button key={cur} onClick={() => setTarget(cur)} className={`chip ${target===cur?'chip-cyan':''}`} style={{cursor:'pointer'}}>{cur}</button>
                      ))}
                   </div>
                   
                   <div className="display" style={{fontSize: '64px', color: 'var(--cyan)'}}>
                     {(inr * rates[target]).toFixed(2)} <span style={{fontSize: '32px'}}>{target}</span>
                   </div>
                </div>
             </div>

          </div>
        </div>

      </div>
    </div>
  )
}
